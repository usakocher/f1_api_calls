# f1_api_calls

## Requirements
We were asked to build a website that displays information pulled from an API. The API listed results for F1 racing and we were to display the top seven drivers by points
for each season and round.

## Assumptions
This was to be a simple website with not user function. A quick look up and go site.

## Methodology
The first thing I did was design my basic website. I created a table, text fields to input season and round, and 2 buttons for getting data and clearing the data. I made the
text fields required and the action on button submit so that the fields needed to be filled out before any action was taken. I then created the pathways to the APIs, ensuring
that the data returned was accurate.<br>
Following that, I created the functions to populate and clear the table. I used a for loop with dynamic variables in order to do this. I then test the website with different
values to make sure it was rendering correctly.

## Lessons Learned
This was a great experiment on how to interact with APIs and how to use the information. One thing I'm proud of is that this website uses two different APIs. First, it uses
our assigned API to retrieve the racing information. It then uses a second, to take the nationality of the driver and sponsor, and convert it into a two letter county code. Finally it uses a website to retrieve the flag image using the two letter code.<br>

This is a good lesson in verifying data. Because of a long history of colonization, some nationalities from European countries, in my case Dutch, appear as nationalities for
other countries. My program will just grab the first one and return that flag. So anyone with a nationality of 'Dutch' will return a different flag.
