// dice roler library

var dice = {
    roll: function (side) {
        return  Math.ceil(Math.random() * side);
    },
    unlimitRoll: function (side) {
        var dice = 0;
        do {
            var roll = this.roll(side);
            dice += roll;
        } while (roll === side);

        return dice;
    },
    jokerRoll: function (side) {
        return Math.max(this.unlimitRoll(side), this.unlimitRoll(6));
    }
};