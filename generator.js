var generator = {
    init: function () {
        $('button').click(function (e) {
            var obj = generator.generate();
            $('#export').text(JSON.stringify(obj, null, 2));
            return false;
        });
    },
    generate: function () {
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


        // skills : 20-21 points dans 9 compétences (on en choisit 7)
        // nb competences par attribut (du plus haut au plus bas): 3 2 2 1 1
        // pour les hhindrances : faire des poids (myope par exemple) ?
        // social : noble (ou statut), contacts etc...
        // pour la thune : utiliser les atout fric (à trier à part) poches percés, normal , riche , très riche
        // on rajoute peut-etre des atouts/hindrances



        return nc;
    },
    ageModel: [
        {proba: 1, skill: 7, init: function (ch) {
                ch.age = dice.roll(4) + 6;
                ch.emergencyTime = '1 h';
                ch.activity = 'Élève primaire';
                ch.addHindrance('Gamin');
                ch.attrCreationPoint = 3;
                ch.skillCreationPoint = 10;
            }},
        {proba: 2, skill: 8, init: function (ch) {
                ch.age = dice.roll(6) + 10;
                ch.emergencyTime = '4 h';
                ch.activity = 'Collégien';
            }},
        {proba: 3, skill: 9, init: function (ch) {
                ch.age = dice.roll(4) + dice.roll(4) + 14;
                ch.emergencyTime = '2 j';
                ch.activity = 'Lycéen – étudiant';
            }},
        {proba: 9, skill: 10, init: function (ch) {
                ch.age = dice.roll(20) + dice.roll(20) + 18;
                ch.emergencyTime = '1 semaine';
                ch.activity = 'Adulte';
            }},
        {proba: 5, skill: 12, init: function (ch) {
                ch.age = dice.roll(10) + dice.roll(10) + dice.roll(10) + 50;
                ch.emergencyTime = '1 mois';
                ch.activity = 'Retraité';
            }}
    ],
    rollAge: function () {
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
};
