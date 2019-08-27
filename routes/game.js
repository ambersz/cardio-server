var express = require('express');
var router = express.Router();
var game = require('../hanabi/game');

/* GET home page. */
router.get('/game', function(req, res, next) {
    // TODO AZ
    res.send(game.action());
});

module.exports = router;


/// state, player, selected element, return new state