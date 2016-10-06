/*
 * Character object
 */

var Character = function () {
    this.attribute = {};
    this.skill = {};
    this.gender = '';
    this.age = 0;
    this.hindrance = [];
    this.edge = [];

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
};

