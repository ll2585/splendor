var assert = require("assert");
var Game = require("../game");
var Game_Instance = require("../game_instance");
suite('model', function(){
    var g;
    setup(function() {
        g = new Game();
        // runs before all tests in this block
    });
    suite('testing game', function(){
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
        test('should have 7 chips of each color and 5 gold', function(){
            assert.equal(g.num_chips(), 40);
            assert.equal(g.get_chips()['white'], 7);
            assert.equal(g.get_chips()['black'], 7);
            assert.equal(g.get_chips()['green'], 7);
            assert.equal(g.get_chips()['red'], 7);
            assert.equal(g.get_chips()['blue'], 7);
            assert.equal(g.get_chips()['gold'], 5);
        });
    });

    suite('testing game instance', function(){
        test('2 <= game players <= 4', function(){
            var g_i1;
            assert.throws(function(){
                g_i1 = new Game_Instance(['player']);
            }, Error);
            assert.throws(function() {
                g_i1 = new Game_Instance(['player', 'player2', 'player3', 'player4', 'player5']);
            }, Error);
            assert.doesNotThrow(function() {
                g_i1 = new Game_Instance(['player', 'player2', 'player3', 'player4']);
            });
        });

        test('num_players testing', function(){
            var g_i1;
            g_i1 = new Game_Instance(['player', 'player2', 'player3', 'player4']);
            assert.equal(g_i1.nobles_in_play.length, 5);
            assert.equal(g_i1.available_chips['red'], 7);
            g_i1 = new Game_Instance(['player', 'player2']);
            assert.equal(g_i1.nobles_in_play.length, 3);
            assert.equal(g_i1.available_chips['red'], 4);
            assert.equal(g_i1.available_chips['gold'], 5);
            assert.equal(g_i1.revealed_cards['tier 1'].length, 4);
        });

    });
});