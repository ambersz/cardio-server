#Hanabi
In Hanabi the goal is to play cards in order, from 1 to 5, for each color.  Colors can be played asynchronously, e.g. you can play red 2 before blue 1 is down as long as red 1 is already down.
The catch is that each player cannot see their own hands but they can see every other player's hand.  To find out what cards players have in their hands, other players may give clues based on the value or color of the cards.

##Setup
The deck consists of 50 cards, 10 cards of each color with 5 colors.  Each color has the same distribution of numbers:

|value|count|
|-|-|
|1|3|
|2|2|
|3|2|
|4|2|
|5|1|

This means there are 2 copies of cards valued 4.

The deck is shuffled and each player gets a number of cards depending on the player count.  In 2 and 3 player games each player receives 5 cards. In 4 and 5 player games each player receives 4 cards.  In 6 player games each player receives 3 cards.
The number of clues available is set to 8 and the number of strikes is set to 0.
The starting player is determined in whatever way

##Play
Each turn a player must do one of three actions.  Give a clue, play a card, or discard a card.

###Give a Clue
A player may only give a clue if the number of clues available is greater than 0.  To give a clue, first select any other player, and then decide on a value or a color.  If the other player does not have cards of a value or color, the corresponding clue cannot be given.  In other words, clue must be given to at least one card.  Tell that player all cards that match the value or the color.
Once a clue is given, reduce the number of clues available by 1.

###Play a Card
A player may play a card at any time.  To play a card, a player declares a card in their hand to play.  The card is then revealed and then it is determined if it is able to be placed.  A card can be placed if:
 - If the card is a 1, then there must be no other cards of that color played
 - Otherwise, there must be a card placed of the same color that has a value that is 1 less than the card and there must not be a card placed of the same color and same value. e.g. Yellow 3 can be placed only if Yellow 2 has already been placed and Yellow 3 has not been placed

If a 5 is successfully played, increase the number of clues available by 1.  If the number of clues available is 8, do not add a clue.

If it cannot be played then add 1 to the number of strikes and put it into the discard, do not change the number of clues available.

Draw a card to maintain hand size.

###Discard a Card
A player may discard a card if the number of clues available is less than 8.  To discard a card put the card into the discard and increase the number of clues available by 1.

Draw a card to maintain hand size.

##End of Game
The end of the game can occur in 3 ways, winning the game, timing out, and striking out.  When the game ends players can determine how well they did by tallying up the score.

###Scoring
Scoring can be done in two ways:
 - Count the number of cards successfully played or
 - Add up the values of the highest value cards of each color

###Winning the Game
The game ends with a win when the players successfully play the 5 of every color.  This is when they get a total score of 25.

###Timing Out
If by Discarding a Card or Playing a Card a player draws the last card of the deck, they trigger the end of the game.  Each player, including the player that drew the last card, gets one more turn and then the game ends.  The players can then score their game.

###Striking Out
If the number of strikes reaches 3 then the game immediately ends.  The players score 0 for this game.
