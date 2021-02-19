# Full Stack Web Development with React

This repo contains a runnable demo of a complete website with both front-end and back-end, from a [Coursera specialization](https://www.coursera.org/learn/front-end-react) that I took from late 2020 to early 2021. The back-end was built from lesson instructions and during homework assignments, while the front-end code was provided by the instructor as a means to test the back-end.


## Background of Javascript-based Web Dev

I wrote this section partly as a segue to the next section on getting started, and partly as a resource to document the interesting evolution of web development over the years.

The application in this repo uses a typical client-server [three-tier architecture](https://en.wikipedia.org/wiki/Multitier_architecture), which clearly separates the responsibilities of each tier and makes the application more flexible and reusable.

| Tier | Traditional Web Dev | Full Stack Javascript Dev |
| - | - | - |
| Presentation | html, css, js | react, vue, etc |
| Business Logic / Application | Ruby/ Python/ Java /C++ / PHP | Node.js with Express |
| Data | DBMS | MongoDB, etc |
| | | |

Javascript was initially meant to run on the browser, at the presentation tier. Node.js brought it from the browser to the desktop, meaning it could be used for other purposes such as server-side development. Thus, this brought about the advent of full-stack Javascript development, where all 3 tiers are based on Javascript. It's much easier to find a developer skilled in Javascript, compared to a developer skilled in multiple languages for the whole stack.

As Javascript is being used beyond it's original intentions, it lacked the traits of typical languages such as the ability to distribute into multiple .js files, and having common libraries to import (e.g. time). This is where CommonJS comes in - it allows each .js file to be a *Node module* that can be imported or exported. That is why we use NPM (Node Package Manager) to install 3rd party node modules.

The Javascript libraries/frameworks used in this repo are as follows:
- Presentation tier: React, which is the front end library built by Facebook
- Business logic / application tier: Express with Node.js. Express is a very popular framework/ node module for building HTTP servers that use [REST api](https://en.wikipedia.org/wiki/Representational_state_transfer)
- Data tier: MongoDB, a NoSQL database that's easier to scale compared to traditional relational SQL databases. Data is stored in JSON documents.


## How to Start

To run this demo, you'll need to open up 3 separate terminal windows to run the following:
- MongoDB server: 
- Express server:
- React client:


