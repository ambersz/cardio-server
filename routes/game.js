var express = require('express');
var router = express.Router();
var game = require('../hanabi/game');

// TODO AZ: use a proper db...
var games = {};

// Session Demo for testing that redis is set up correctly
/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.views) {
        req.session.views++
        res.setHeader('Content-Type', 'text/html')
        res.write('<p>views: ' + req.session.views + '</p>')
        res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
        res.end()
    } else {
        req.session.views = 1
        res.end('welcome to the session demo. refresh!')
    }
});


router.post('/join/:gameID', function(req, res, next) {
    let gameID = req.params.gameID;
    req.session.gameID = gameID;
    if (games[gameID] === undefined) {
        games[gameID] = {};
    }
    res.send('looks okay ' + gameID);
});

router.post('game', function(req, res, next) {
    // create game
    // return gameID
});

router.get('games', function(req, res, next) {
    // return list of games
})

router.post('/action', function(req, res, next) {
    if (req.session.gameID) {
        let gameID = req.session.gameID
        /// state, player, selected element, return new state
        var newState = game.action(games[gameID], req.session.playerID, req.body);
        console.log(newState);
        games[gameID] = newState + gameID;
        // TODO AZ filter new state for hidden info before returning to client
        var filterState = newState + ' ' + gameID;
        res.send(filterState);

    } else {
        // TODO AZ player has not joined a game yet
        res.status(403);
        res.end();
    }
});

router.get('/logstates', function(req,res,next) {
    if (req.app.get('env') === 'development') {
        console.log(games);
        res.json((games));
    } else {
        res.status(403);
        res.send("use developement mode");
    }
});

module.exports = router;


/// state, player, selected element, return new state