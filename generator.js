var generator = {
    init: function () {
        $('button').click(function (e) {
            alert('toto');
            return false;
        });
    },
    generate: function () {
        var nc = new Character();
        savageWorlds.trait.attribute.forEach(function (attr) {
            nc.attribute[attr] = 4;
        });

        return nc;
    }
};
