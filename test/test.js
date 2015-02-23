var assert = require("assert");
var Game = require("../game");
suite('model', function(){
    var g;
    setup(function() {
        g = new Game();
        // runs before all tests in this block
    });
    suite('testing cards', function(){
        test('should have 90 cards', function(){
            assert.equal(g.num_cards(), 90);
        });
        test('should have 10 nobles', function(){
            assert.equal(g.num_nobles(), 10);
        });
        test('should have 3 tiers', function(){
            assert.equal(Object.keys(g.get_cards()).length, 3);
        });
        test('should have 40/30/20 cards', function(){
            assert.equal(g.get_cards()['tier 1'].length, 40);
            assert.equal(g.get_cards()['tier 2'].length, 30);
            assert.equal(g.get_cards()['tier 3'].length, 20);
        });
    });
});