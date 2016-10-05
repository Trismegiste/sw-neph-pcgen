var generator = {
    init: function () {
        $('button').click(function (e) {
            var obj = generator.generate();
            $('#export').text(JSON.stringify(obj));
            return false;
        });
    },
    generate: function () {
        var nc = new Character();

        // gender
        nc.gender = (Math.random() > 0.5) ? 'M' : 'F';

        // attributes
        for (var k = 0; k < 5; k++) {
            var attr = savageWorlds.trait.attribute[Math.floor(Math.random() * 5)];
            nc.increaseAttribute(attr);
        }
        // skills


        return nc;
    }
};
