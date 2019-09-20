# Quantitative Easy
### Overview
In this simplified version of Quantitative Easing, players bid in rounds on tokens. The goal of the game is to have the most tokens at the end of the game after the player who has spent the most money is disqualified.
## Setup
For a game with n players, there should be one host and a defined order of play. Each player starts with 0 money spent. There are n * 3 total rounds of auctioning. (example: for a 4-player game there are 12 tokens)
## Gameplay
During a round, the host declares their bid. This bid is public information and all players can see it. All remaining player simultaneously secretly place their bids. These bids must be different from the host bid. Once all bids are in, the player with the highest bid spends the amount of their bid in exchange for the token. In the case of a tied highest bid, all players involved in the tie remake their bids. These bids must be different from the host bid. There are no new restrictions on the amount of their bids. 
At the end of a round the host is passed to the next player in the defined order of play.

1. Host bids publicly

2. Remaining players secretly place bids

3. Ties rebid until a single player holds the highest bid

4. Highest bidder pays for and receives the token

5. Host role passed to next player

## Scoring 
At the end of the game the player who spent the most money is disqualified from winning. Among the remaining players, the player with the most tokens wins. If there is a tie in the number of tokens, the player who spent the least money wins.