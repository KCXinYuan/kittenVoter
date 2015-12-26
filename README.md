Kitten Voter by Kevin Chuang

Approach:
I personally had a tough time starting the project partially due to not knowing where to start with tracking votes, but as I got more comfortable using jQuery and localStorage, I figured out how to store the results into localStorage and keep the votes persistent.

One big problem I ran into was how localStorage wouldn't reflect the votes that were cast the moment the user voted, it only showed what it stored from the last session. I really racked my brain and finally came up with a solution to make the afterVoteOne and afterVoteTwo variables that took the votes that localStoage had and added the vote the user casted. That way the results were displayed on the chart correctly while after the page is refreshed, the new value is stored in localStorage and ready to be recalled.

From then on it was relatively smooth sailing with adding functionality to the buttons so that the voting ones disappeared so as not to vote multiple times, adding styling, and highlighting the winner.

Credits to the color layout goes to tajeri68 and their Aspirin C theme on Adobe Color CC

https://color.adobe.com/Aspirin-C-color-theme-251864/

All kitten photos are credited to their original owners.
No catnapping occurred in the process of making this website.
