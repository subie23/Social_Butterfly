# Social_Butterfly
This is a CMS-style blog site where developers can publish blog posts and also comment on posts.

## User Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Installation
To use this application, you must have express-handlebars, MySQL2 and Sequelize. The dotenv, bcrypt, express-session, and connect-session-sequelize packasges are also required. After that just follow these steps:

- Clone this repository
- Open in VS Code
- Open in Itegrated Terminal
- Run "npm install"

## Usage
- Open the database file in your terminal
- Run "mysql -uroot -p" and enter your password
- Run "SOURCE schema.sql" to set up the database and tables
- Push 'OK' to quit MySql.
- Create a file called ".env" in the root folder
  Include the following information:
    DB_NAME=''
    DB_USER=''
    DB_PW=''
- Open "server.js" file in your integrated terminal
- Run "npm run seed" to seed the database if desired
- Run "node server.js"
- Open 'localhost:3001' in your browser to view application

