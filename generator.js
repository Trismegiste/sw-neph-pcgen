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
        nc.age = ageChoice.age();
        nc.emergencyTime = ageChoice.emergencyTime;
        nc.activity = ageChoice.label;

        // attributes
        for (var k = 0; k < 5; k++) {
            var attr = savageWorlds.trait.attribute[Math.floor(Math.random() * 5)];
            nc.increaseAttribute(attr);
        }

        var invertSkill = {};
        Object.keys(savageWorlds.trait.skill).forEach(function (key, index) {
            var attr = savageWorlds.trait.skill[key];
            if (invertSkill[attr] === undefined) {
                invertSkill[attr] = [key];
            } else {
                invertSkill[attr].push(key);
            }
        });
        //console.log(invertSkill);

        var attributeSort = savageWorlds.trait.attribute.slice();
        attributeSort.sort(function (a, b) {
            return nc.attribute[b] - nc.attribute[a];
        });
        //console.log(attributeSort);

        var countPerAttr = [3, 2, 2, 1, 1];
        for (k = 0; k < 5; k++) {
            var nb = countPerAttr[k];
            var currentAttr = attributeSort[k];
            var oneAttrSkill = invertSkill[currentAttr];
            for (var i = 0; i < nb; i++) {
                var draw = Math.floor(Math.random() * oneAttrSkill.length);
                nc.increaseSkill(oneAttrSkill[draw]);
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
        {proba: 1, label: 'Élève primaire', emergencyTime: '1 h', age: function () {
                return dice.roll(4) + 6;
            }},
        {proba: 2, label: 'Collégien', emergencyTime: '4 h', age: function () {
                return dice.roll(6) + 10;
            }},
        {proba: 3, label: 'Lycéen – étudiant', emergencyTime: '2 j', age: function () {
                return dice.roll(4) + dice.roll(4) + 14;
            }},
        {proba: 9, label: 'Adulte', emergencyTime: '1 semaine', age: function () {
                return dice.roll(20) + dice.roll(20) + 18;
            }},
        {proba: 5, label: 'Retraité', emergencyTime: '1 mois', age: function () {
                return dice.roll(10) + dice.roll(10) + dice.roll(10) + 50;
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
