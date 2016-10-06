/*
 * Character object
 */

var Character = function () {
    this.attribute = {};
    this.skill = {};
    this.gender = '';
    this.age = 0;
    this.hindrance = {};
    this.edge = {};
    this.attrCreationPoint = 5;
    this.skillCreationPoint = 15;

    var that = this;
    savageWorlds.trait.attribute.forEach(function (attr) {
        that.attribute[attr] = 4;
    });

    this.increaseAttribute = function (attr) {
        this.attribute[attr] += 2;
        if (this.attribute[attr] > 12) {
            this.attribute[attr] = 12;
        }
    };

    this.decreaseAttribute = function (attr) {
        this.attribute[attr] -= 2;
        if (this.attribute[attr] < 4) {
            this.attribute[attr] = 4;
        }
    };

    this.increaseSkill = function (skill) {
        if (this.skill[skill] === undefined) {
            this.skill[skill] = 4;
        } else {
            this.skill[skill] += 2;
            if (this.skill[skill] > 10) {
                this.skill[skill] = 10;  // ceiling = 10
            }
        }
    };

    this.getHindrancecPoint = function () {
        var total = 0;
        var that = this;
        Object.keys(this.hindrance).forEach(function (key, idx) {
            var level = that.hindrance[key];
            switch (level) {
                case 'Mineur':
                    total++;
                    break;
                case 'Majeur':
                    total += 2;
                    break
            }
        });

        return total;
    };

    this.addHindrance = function (key, type) {
        var level;
        var h = savageWorlds.hindrance[key];
        if (h.type === 'Mineur/Majeur') {
            if (type === undefined) {
                throw 'You must choose a type';
            }
            level = type;
        } else {
            if ((type !== undefined) && (type !== h.type)) {
                throw 'Invalid Choice ' + type;
            }
            level = h.type;
        }

        // adding hindrance :
        this.hindrance[key] = level;
    };
};

