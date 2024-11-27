#!/usr/bin/node

class AppController {
  static getHomepage(response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
