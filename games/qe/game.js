/* options: {
    playerCount: number
}
*/

function initGame(options) {
    // return first state
}
/// state, player, selected element, return new state

function action(state, player, selected) {
    var newState = "this should be a json object but I need text to render for testing";
    // TODO Assign
    return newState
}

// returns filtered state to hide hidden information
function playerView(state, playerIndex) {
    // TODO Assign
}

// return boolean
function validateGameSettings(options) {
    if (options.playerCount<2||options.playerCount>5) {
        return false;
    }
    return true;
}



game = {validateGameSettings, initGame, action, playerView};
module.exports = game;