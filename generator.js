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
                ch.hindrance = ['Gamin'];
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
