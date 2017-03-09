var Generator = function () {
    this.childrenCount = [0, 1, 1, 2, 2, 3]
    this.siblingCount = [0, 0, 0, 0, 1, 1, 1, 2]
    this.ageModel = [
        {proba: 1, skill: 7, init: function (ch) {
                ch.age = dice.roll(4) + 6;
                ch.emergencyTime = '1 h';
                ch.activity = 'Élève primaire';
                ch.addHindrance('Gamin');
                ch.attrCreationPoint = 3;
                ch.skillCreationPoint = 10;
            }
        },
        {proba: 2, skill: 8, init: function (ch) {
                ch.age = dice.roll(6) + 10;
                ch.emergencyTime = '4 h';
                ch.activity = 'Collégien';
            }
        },
        {proba: 3, skill: 9, init: function (ch) {
                ch.age = dice.roll(4) + dice.roll(4) + 14;
                ch.emergencyTime = '2 j';
                ch.activity = 'Lycéen – étudiant';
            }
        },
        {proba: 10, skill: 10, init: function (ch) {
                ch.age = dice.roll(20) + dice.roll(20) + 18;
                ch.emergencyTime = '1 semaine';
                ch.activity = 'Adulte';
                if (dice.roll(4) == 1) {
                    ch.addHindrance('Myope', 'Mineur');
                }
                if (Math.random() > 0.33) {
                    ch.inCouple = true;
                }
            }
        },
        {proba: 4, skill: 12, init: function (ch) {
                ch.age = dice.roll(10) + dice.roll(10) + dice.roll(10) + 50;
                ch.emergencyTime = '1 mois';
                ch.activity = 'Retraité';
                ch.skillCreationPoint = 20;
                ch.addHindrance('Agé');
                if (Math.random() > 0.5) {
                    ch.inCouple = true;
                }
            }
        }
    ]
}

Generator.prototype.render = function (pc) {

    //skills
    view = $('#skills');
    view.empty();
    // sorting skills
    var reorder = Object.keys(pc.skill);
    reorder.sort(function (a, b) {
        return pc.skill[b] - pc.skill[a];
    });
    reorder.forEach(function (key, idx) {
        view.append('<tr><th>' + key + '</th><td>d' + pc.skill[key] + '</td></tr>');
    });

    //edges
    view = $('#edges');
    view.empty();
    pc.edge.forEach(function (key, idx) {
        view.append('<tr><td>' + key + '</td></tr>');
    });
    //hindrances
    view = $('#hindrances');
    view.empty();
    Object.keys(pc.hindrance).forEach(function (key, idx) {
        view.append('<tr><td>' + key + '</td><td>' + pc.hindrance[key] + '</td></tr>');
    });
    // technical
    view = $('#technical');
    view.find('.overspentSkill').text(pc.getSkillPoint() + ' / ' + pc.skillCreationPoint);
    view.find('.edgeBalance').text(pc.getEdgeBalance());
    // siblings
    view = $('#siblings');
    view.empty();
    pc.sibling.forEach(function (val) {
        view.append('<tr><td>' + val.gender + '</td><td>' + val.age + '</td></tr>');
    });
    // children
    view = $('#children');
    view.empty();
    pc.children.forEach(function (val) {
        view.append('<tr><td>' + val.gender + '</td><td>' + val.age + '</td></tr>');
    });
    //parents
    view = $('#parents');
    view.empty();
    pc.parent.forEach(function (val) {
        view.append('<tr><td>' + val.gender + '</td><td>' + val.age + '</td></tr>');
    });
    // kaSun
    $('#kaSun').text('d' + pc.kaSun);
}

Generator.prototype.generate = function () {
    var nc = new Character();

    // gender
    nc.gender = (Math.random() > 0.5) ? 'M' : 'F';
    // age
    var ageChoice = this.rollAge();
    ageChoice.init(nc);

    // skill choice
    var skill = Object.keys(savageWorlds.trait.skill);
    for (var i = 0; i < ageChoice.skill; i++) {
        var draw = Math.floor(Math.random() * skill.length);
        nc.increaseSkill(skill[draw]);
    }
    // investment
    var skill = Object.keys(nc.skill);
    for (i = 0; i < ageChoice.skill; i++) {
        var draw = Math.floor(Math.random() * skill.length);
        nc.increaseSkill(skill[draw]);
    }

    var maxPerAttribute = {};
    var countPerAttribute = {};
    Object.keys(nc.skill).forEach(function (key, idx) {
        if (nc.skill[key] > 4) {
            var attr = savageWorlds.trait.skill[key];
            if (maxPerAttribute[attr] === undefined) {
                maxPerAttribute[attr] = 4;
            }
            if (nc.skill[key] > maxPerAttribute[attr]) {
                maxPerAttribute[attr] = nc.skill[key];
            }

            if (countPerAttribute[attr] === undefined) {
                countPerAttribute[attr] = 0;
            }
            countPerAttribute[attr]++;
        }
    });
    console.log(maxPerAttribute);
    console.log(countPerAttribute);
    // cost for attribute
    var totalCost = 0;
    Object.keys(maxPerAttribute).forEach(function (key, idx) {
        totalCost += (maxPerAttribute[key] - 4) / 2;
    });
    console.log(totalCost);
    // if overspent :
    if (totalCost > nc.attrCreationPoint) {
        var delta = totalCost - nc.attrCreationPoint;
        var priority = Object.keys(countPerAttribute);
        priority.sort(function (a, b) {
            return countPerAttribute[a] - countPerAttribute[b];
        });
        console.log(priority);
        for (var i = 0; i < delta; i++) {
            var attrToDecrease = priority[i % priority.length];
            maxPerAttribute[attrToDecrease] -= 2;
        }
        console.log(maxPerAttribute);
    }
    // set attibutes
    Object.keys(maxPerAttribute).forEach(function (key, idx) {
        nc.attribute[key] = maxPerAttribute[key];
    });
    // if remaining points
    if (totalCost < nc.attrCreationPoint) {
        var delta = -totalCost + nc.attrCreationPoint;
        var priority = ['Vigueur', 'Âme', 'Force'];
        for (var i = 0; i < delta; i++) {
            var attrToIncrease = priority[i % priority.length];
            nc.attribute[attrToIncrease] += 2;
        }
    }

    // money :
    var draw = dice.roll(20);
    if (draw <= 3) {
        nc.addHindrance('Poches Percées');
    } else if (draw < 14) {
        // nothing
    } else if (draw < 18) {
        nc.addEdge('Riche');
    } else {
        nc.addEdge('Riche');
        nc.addEdge('Très riche');
    }

    // finalizing hindrances
    var target;
    switch (dice.roll(4)) {
        case 1 :
            target = 0;
            break;
        case 4 :
            target = 4;
            break;
        default:
            target = 2;
    }
    // overriding hindrance requirement if existing unpaid edges :
    if (nc.getEdgeBalance() > target) {
        target = nc.getEdgeBalance();
    }

    // adding more hindrance
    while (target > nc.getHindrancePoint()) {
        var lst = Object.keys(savageWorlds.hindrance);
        var draw = Math.floor(Math.random() * lst.length);
        try {
            var expected = 'Majeur';
            if ((target === 2) && (nc.getHindrancePoint() === 0)) {
                expected = 'Mineur';
            } else if ((target - nc.getHindrancePoint()) < 2) {
                expected = 'Mineur';
            }
            nc.addHindrance(lst[draw], expected);
        } catch (e) {

        }
    }
    // finalizing edges
    var remaining = -nc.getEdgeBalance();
    if (remaining > 0) {
        // only even values
        if ((remaining % 2) === 1) {
            remaining--;
            nc.skillCreationPoint++;
        }
        // adding edeges
        while (remaining > 0) {
            var lst = Object.keys(savageWorlds.edge);
            var draw = Math.floor(Math.random() * lst.length);
            try {
                nc.addEdge(lst[draw]);
                remaining -= 2;
            } catch (e) {
            }
        }
    }
    // sibling
    var sibling = this.siblingCount[dice.roll(8)];
    for (var k = 0; k < sibling; k++) {
        nc.sibling.push(this.generateSibling(nc.age));
    }
    //parents
    var cpt = 2;
    draw = dice.roll(10);
    if (draw < 10) {
        nc.parent.push({gender: 'F', age: nc.age + 20 + dice.roll(10)});
        if (draw <= 7) {
            nc.parent.push({gender: 'M', age: nc.age + 20 + dice.roll(10)});
        }
    }
    // Ka-Sun
    draw = dice.roll(20);
    if (draw > 16) {
        nc.kaSun = 6;
        if (draw === 20) {
            nc.kaSun = 8;
        }
    }
    // children
    if ((nc.inCouple) && (nc.age > 30)) {
        var cpt = this.childrenCount[dice.roll(6)];
        for (var k = 0; k < cpt; k++) {
            nc.children.push({
                gender: Math.random() > 0.5 ? 'M' : 'F',
                age: nc.age - 30 + dice.roll(10)
            });
        }
    }

    return nc;
}

Generator.prototype.generateSibling = function (ageBase) {
    return {
        gender: Math.random() > 0.5 ? 'M' : 'F',
        age: ageBase - 6 + dice.roll(12)
    };
}

Generator.prototype.rollAge = function () {
    var total = 0;
    this.ageModel.forEach(function (row) {
        total += row.proba;
    });

    var choice = dice.roll(total);
    var current = 0;
    var found;
    this.ageModel.forEach(function (row) {
        if (found === undefined) {
            current += row.proba;
            if (current >= choice) {
                found = row;
            }
        }
    });

    return found;
}

