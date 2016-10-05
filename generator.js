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
        // skills


        return nc;
    },
    ageModel: [
        {proba: 1, label: 'Élève primaire', emergencyTime: '1 h', age: function () {
                return dice.roll(6) + 5;
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
