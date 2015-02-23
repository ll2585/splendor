var Card = require("./card");
var Noble = require("./noble");

function Game() {
    this.cards = {'tier 1': [],
        'tier 2': [],
        'tier 3': []
    };
    this.nobles = [];
    this.chips = {'red': 7, 'white': 7, 'black': 7, 'green': 7, 'blue': 7, 'gold': 5};
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('cards.json', 'utf8'));
    for(var i = 0; i < obj.length; i++){
        this.cards[obj[i].tier].push(new Card(obj[i].tier, obj[i].cost, obj[i].benefit, obj[i].points));
    }
    obj = JSON.parse(fs.readFileSync('nobles.json', 'utf8'));
    for(var i = 0; i < obj.length; i++){
        this.nobles.push(new Noble(obj[i].cards, obj[i].points));
    }
};

Game.prototype.num_cards = function() {
    var count = 0;
    for (tier in this.cards){
        count += this.cards[tier].length;
    }
    return count
};

Game.prototype.num_chips = function() {
    var count = 0;
    for (jewel in this.chips){
        count += this.chips[jewel];
    }
    return count
};

Game.prototype.get_chips = function() {
    return this.chips;
};

Game.prototype.get_cards = function() {
    return this.cards;
};

Game.prototype.num_nobles = function() {
    return this.nobles.length;
};

module.exports = exports = Game;