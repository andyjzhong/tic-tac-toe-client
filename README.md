[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Project 1: A Tic-Tac-Toe Game

## Overview

After about 2-3 weeks of formal training at General Assembly, this is my first attempt at using the skills I’ve learned in HTML, CSS, and JavaScript to create a Tic-Tac-Toe game. Based on the goals and scope of the project, I was able to deploy a working Tic-Tac-Toe game which can be played by a single user by clicking on the game board. The sections below illustrate my development approach, challenges, victories, and unresolved issues.

Tic-Tac-Toe URL: http://andyjzhong.github.io/tic-tac-toe-client/


### Project Goals

Below are the high level goals of the game project:
- Build a web application from scratch, without a starter codebase
- Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
-	Separate HTML, CSS, and JavaScript files in your application
-	Build an application to a spec that someone else gives you
-	Build a dynamic game that allows two players to compete (bonus: compete from separate devices)
-	Craft a readme.md file that explains your app to the world
-	Communicate with a back-end (which we'll provide for you) to store the state of your game.


## Development Approach

My approach for developing a Tic-Tac-Toe game started with reading the Game Project Requirements. Once I had a good understanding of the scope of the project, I made my first attempt at creating my first Single-Page Application (SPA).

-	I began by envisioning what a completed Tic-Tac-Toe SPA would look like and designed a basic wireframe by hand. Some specific features include:
    - Functional Game Board
    - Forms for Sign-Up/Sign-in w/ buttons
    - Navbar w/ links

URL to Wireframe: http://imgur.com/a/kskJh

-	Next, I devised user stories to help guide how I would build out the functionality. Below is a list of user stories I developed at the start of the project.

As a player, I would like to:
-	Click on a game board so I can play a Tic-Tac-Toe game.
-	Know whether or not the game has ended in a win/loss/draw.
-	Sign up a player account with an e-mail and password so I can record my wins.
-	Sign out and Change my Password.
-	Click a reset button so I can play multiple games without refreshing the page.

-	Armed with a basic wireframe and user stories, I built out a game board using HTML, CSS, and Bootstrap. This involved creating and formatting nine boxes in the middle of the page which will later be the feature of the SPA.

-	Using my knowledge of JavaScript, I added event handlers for creating user accounts, signing in, signing out, and changing passwords. In order to do this, I referred back to our API training for creating user accounts.

-	My next step was creating the ability to log X’s and O’s into the game board. Once that was established, it took me a while to figure out how to develop code for determining a winner and notifying whether the player has won or lost.

-	I found that whenever I needed to take a break from JavaScript, I really enjoyed learning about CSS and Bootstrap. It is easily my favorite part about web development so far!


## Challenges & Victories

Developing an SPA after only about 2-3 weeks of formal training definitely presented some challenges. Although I struggled with some of these concepts, I love the revelation of finally getting a piece of code to function properly and actually understanding what I’ve built.

-	My first challenge was creating a game board that would log alternating X’s and O’s into each square. After some assistance from fellow developers, I was able to get this working using event handlers and establishing whose current turn it was.

-	My second challenge was figuring out how to determine a game winner. This was particularly frustrating because I spent the most time on the game logic due to my tendency to thrash and want to exhaust every resource I had until I reach out for help. It was also during this time that I realized how developers find drastically different ways to accomplish the same goal.
    - Although this was my biggest challenge, it also became my biggest victory that got me back into the developer frame of mind. Jordan was able to help me focus on breaking down my issue to the most immediate concern.

-	My next challenge was figuring out how to log whether or not the player has won onto the SPA. This took a bit of time too, but I once again got some help from a fellow developer and was able to create a function where if the conditions of a win are met by a certain player, reference an object and replace its text with ‘X/O is the Winner!’

-	Now that the previous step has been completed, it was now time to create the ability to display a ‘Draw Game’ once a game has been completed with no clear winner. This was a personal victory for me because I felt like I was able to really tackle it from a developer’s mindset. I created a turn counter and if it reaches nine without any of the win functions triggering, it would change the banner text to say, ‘Draw Game!’


## Resolved Issues

Below is a list of resolved issues that I addressed in between versions 1.0 and 2.0.
-	Successful Authentication Network Activity: User is now able to connect to the network and perform actions related to creating a user, signing in, logging out, and changing passwords.
-	User Feedback for Success/Fail of Authentication Activity: A banner in red font within the User Account Management section now provides feedback upon entering each authentication action on success and fail.
-	Network Activity for Gameplay: Gameplay is now connected to the API. Each game is created upon clicking the Create New Game button and each click on the game board registers a Patch request to update the game cells.
-	Visually Display the Results of Retrieving Game Stats: A new View Games Played button is available upon signing in. Once clicked, it will display a banner below with green text that returns a Get request for the total number of games played.
-	Removed User-facing Bugs: The Game Board, Sign Out, and Change Password functions are now hidden upon loading the webpage and will show up after successful sign in. Similarly, upon successful sign in, the Sign Up and Sign In functions will become hidden. Also removed any non-functional buttons and links and added functionality for clearing out forms upon submission.
-	Win Condition: Once a game is won (or ends in a draw), the blue text above the game board will indicate the result of the game.
-	Ends Game after Win: When a winner is determined, the user is no longer able to continue playing the game by clicking additional cells.
-	New Game Available Upon Create New Game: When the Create Game button is clicked, it successfully clears the board and creates a new game where the user can continually play again and again.

Additionally, I recommend testing the game on mobile for responsiveness.

## Version History

Version 1.0 – Game Project Launch
-	Initial Tic-Tac-Toe SPA for Presentation


Version 2.0 – Game Project Resubmission
-	Resubmission for Tic-Tac-Toe
-	See Resolved Issues section for a complete list of changes



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
