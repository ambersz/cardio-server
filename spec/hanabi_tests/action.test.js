// Example tests:

// describe wraps a group of related tests
describe("Action", function() {
    // import relevant files for the tests here
    var game = require('../../hanabi/game');
    // but any setup should be done in beforeEach functions, NOT in this function body

    // individual tests are done here
    it("should return a new state object", function() {
        const playerId = 'player-890';
        const cardId = 'card-567-890';
        var newState = game.action({something:"old state"}, playerId, cardId);
        
        // tests should have at least one expect, will fail at the first expect that fails
        expect(newState).toEqual(jasmine.any(Object));
    });

    // if you're running multiple tests and need to do teardown, should be done in afterEach
    // see jasmine_examples/PlayerSpec.js for more examples
});