/*
 * Character object
 */

var Character = function () {
    this.attribute = {};
    this.skill = {};
    this.gender = '';
    this.age = 0;
    this.hindrance = {};
    this.edge = [];
    this.attrCreationPoint = 5;
    this.skillCreationPoint = 15;
    this.inCouple = false;
    this.sibling = [];
    this.kaSun = 4;
    this.parent = [];
    this.children = [];
    this.skillCeiling = 8;
    riot.observable(this);

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
            if (this.skill[skill] > this.skillCeiling) {
                this.skill[skill] = this.skillCeiling;  // ceiling = this.skillCeiling
            }
        }
    };

    this.getHindrancePoint = function () {
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

        if (h === undefined) {
            throw new 'Unknown ' + key;
        }
        if (this.hindrance[key] !== undefined) {
            return;
        }

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

    this.removeHindrance = function (key) {
        delete this.hindrance[key]
    }

    this.getSkillPoint = function () {
        var total = 0;
        var that = this;
        Object.keys(this.skill).forEach(function (key, idx) {
            var skillLevel = that.skill[key];
            var linkedAttribute = savageWorlds.trait.skill[key];
            var attrLevel = that.attribute[linkedAttribute];
            total += (skillLevel <= attrLevel) ? skillLevel / 2 - 1 : skillLevel - attrLevel / 2 - 1;
        });

        return total;
    };

    this.getOverspentPoint = function () {
        return this.getSkillPoint() - this.skillCreationPoint;
    };

    // positive if more Edges than Hindrances
    this.getEdgeBalance = function () {
        return 2 * (this.edge.length - 1) - this.getHindrancePoint();
    };

    this.addEdge = function (key) {
        var edge = savageWorlds.edge[key];
        if (edge === undefined) {
            throw 'Unknown ' + key;
        }
        // already existing ?
        for (var i = 0; i < this.edge.length; i++) {
            if (this.edge[i] === key) {
                throw key + ' already exists';
            }
        }
        // adding
        this.edge.push(key);
    };

    this.removeEdge = function (key) {
        var idx = this.edge.indexOf(key)
        if (-1 !== idx) {
            this.edge.splice(idx, 1)
        }
    }
};

