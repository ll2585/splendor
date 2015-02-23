var Game = require("./game");

Game_Instance.prototype = new Game();
Game_Instance.prototype.constructor=Game_Instance;
function Game_Instance(players){
    if(players.length < 2 || players.length > 4){
        throw new Error("Error: must have 2-4 players");
    }

    this.players = players;
    //shuffle decks
    var shuffled_nobles = shuffleArray(this.nobles);
    this.shuffled_cards = {'tier 1': shuffleArray(this.cards['tier 1']),
        'tier 2': shuffleArray(this.cards['tier 2']),
        'tier 3': shuffleArray(this.cards['tier 3'])};
    this.available_chips = this.chips;

    //nobles = num_players + 1
    //chips = 2 players, -3, 3 players, -2, 4 players, 0
    this.nobles_in_play = [];
    for(var i = 0; i < this.players.length + 1; i++){
        this.nobles_in_play.push(shuffled_nobles.pop());
    }
    if(this.players.length == 2){
        remove_chips(this.available_chips, 3);
    }else if(this.players.length == 3){
        remove_chips(this.available_chips, 2);
    }

    this.revealed_cards = {'tier 1': [], 'tier 2': [], 'tier 3': []};
    for(var i = 0; i < 4; i++){
        for(var tier in this.revealed_cards){
            this.revealed_cards[tier].push(this.shuffled_cards[tier].pop());
        }
    }
};

function remove_chips(chips, amt){
    for(var c in chips){
        if(c != 'gold'){
            chips[c] -= amt;
        }
    }
}
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
module.exports = exports = Game_Instance;