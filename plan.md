# THE IT CROWD TRIVIA QUIZ

![the it crowd](./public/images/the_it_crowd.jpeg)

MY GOAL: build up a trivia quiz about IT Crowd. I want to display a question at time and four options of answers for each question. When the player press on some of the answers, it should change its color for red, if it is an incorrect answer, ot change its color for green, if it is a correct answer.

<br>
<hr />

## PART 1

### Front-end

- Create a basic HTML file ✔️
- Create a CSS file ✔️
- Link the css with the html file ✔️
- Create a h1 tag to display "The IT Crowd Trivia Quiz" ✔️
- Create a button to start the game ✔️
- Create a list to display the questions and answers ✔️
- Create the project style using figma ✔️
- Apply the project style to the webpage using css ✔️

<br>
<hr />

## PART 2

### Back-end

### Step 1: install needed apps

- create a package.json ✔️
- install express ✔️
- install morgan ✔️
- install nodemon ✔️
- create a gitignore file and add n0de_modules ✔️
- set up the script on the package.json to run nodemon ✔️

### Step 2: create and set up the server

- create a file app and import app from express ✔️
- save express in a variable app ✔️
- set up the server port ✔️
- set up the the handler request to receive a get request from the path "/" and send back a message "Hello World" ✔️
- now that the server is running, set up the get request handler to return the html file when a get request is received by the server ✔️

### Step 3: create and set up the database

#### My goal in this section is create a database on Heroku, create a file to save the functions that are gonna use query statements to create a table, populate that table, retrieve its rows, and retrieve just on row at time.

- install pg ✔️
- create a file database and import pg ✔️
- create a database on Heroku ✔️
- set up the database credentials ✔️
- export the query function ✔️
- create a new file to the logic models to interact with the database (SQL statements) ✔️
- create a query statement to create a table (question 1, answer 1, answer 2, answer 3, answer 4) ✔️
- create a query statement to populate the table white the questions and its answers ✔️
- create a query statement to retrieve the all the table content ✔️
- create a query statement to retrieve just one question and its answers

### Step 4: set up the API

#### My goal in this section is make my db content be displayed on the page.

- create an index.js and link it with the html file ✔️
- in the index.js, get the start button and add an event listeners to display one question and its answers when clicked ✔️
  - display the question inside the p tag with id 'question' ✔️
  - display answer1 inside the li tag with id answer1 and so on ✔️
- set the get request handler to display the first question when the button is clicked ✔️
