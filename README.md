# White Rabbit Test

White rabbit coding test

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.16.0

    $ npm --version
    6.14.11

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

---

## Install

    $ git clone https://github.com/muhasinbabu007/WhiteRabbitTest.git
    $ cd WhiteRabbitTest
    $ npm install

## Configure app

Create a .env in root directory then edit it with your settings. You will need:

    DB_NAME=''
    DB_USER=''
    DB_PASSWORD=''
    DB_DIALECT=''
    DB_HOST=''
    DB_PORT=

## Run Migration

    $ npm run migrate

## Running the project

    $ npm start

---
## API Routes

- GET /users - Get whole user list
- GET /users/< user-id> - Get specific  user data
- POST /users/create -  Add new user to system


## Web Pages

- GET /users - Get whole user list
- GET /users/id - Get specific  user data
- GET /users/create -  Add new user to system
