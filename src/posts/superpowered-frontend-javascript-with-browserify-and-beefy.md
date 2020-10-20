---
title: Superpowered Front-End Javascript Development with Broswerify and Beefy
layout: layouts/post.njk
categories: meta 
tags: ["post", "javascript", "tooling"]
date: 2020-11-20
---

What if you could (easily) use NPM packages in your front-end code? What if you could architect your front-end javascript using Node.js style `require` statements? You can! 

[Browserify](http://browserify.org/) makes it stunningly simple. Combine that with the associated project [Beefy](http://didact.us/beefy/) you can have a robust development environment for Browserify, really really easily.

>"Browserify lets you require('modules') in the browser by bundling up all of your dependencies." - browserify.org

## The Quick and the Dirty

First you just need to install both globally:
```
npm i -g browserify beefy
```

In your project files you can now require your custom scripts via neatly organized distinct files!

```javascript
const saySomething = require("./modules/fun/saySomething.js");
```

And in your saySomething.js module file you just can have:

```javascript
exports = (statement) => {return `${statement} is what I'm saying to you!`}
```

Now you're setup. Anywhere you've required saySomething you can now call it and run it and get it's return value.

```javascript
const saySomething = require("./modules/fun/saySomething.js");
console.log(saySomething('"Yay Browserify!"');
//Expected output: "Yay Browserify!" is what I'm saying to you!
```

## Run your dev server with Beefy

From the command line, at the root of your project, just point beefy at the primary JS file for your project and it will use Browserify on it, compiling and doing all the magic, and then spin-up a server for you to see your madness in action.

```
beefy js/index.js
```

I structure my projects using this single file that is a main controller for the project, requiring all sorts of things and orchestrating the overall flow of the program.

At the top of your file you'll have your require statements and then you can use an async IIFE to smoothly have await statements throughout your program. This will allow you to await asynchronous modules and only proceed when they've completed.

```javascript
(async () =>{})();
```

## Bundle your JS for production

Oh, it's so easy.


```
browserify -t babelify js/index.js > dist/index.js
```

The above creates a bundled and browser ready JS file. You can now use this file in production. 

The first project I used this on I actually took the contents of the Browserified file and pasted it into a <script></script> on each of a series of pages inside Drupal. Gotta do what you gotta do!

## Additional Resources

* [Browserify](http://browserify.org/)
* [Beefy](http://didact.us/beefy/)
* [Bulletproof node.js project architecture 🛡️](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf) - A really thorough explanation of a great way to structure your Node projects. Only now, you can do this for your frontend code thanks to Browserify.
* [Node.js module.exports vs. exports](https://www.freecodecamp.org/news/node-js-module-exports-vs-exports-ec7e254d63ac/) - A nice, brief explanation.
* [Browserify Handbook](https://github.com/browserify/browserify-handbook) - An incredible, sponsored guide to Browserify, helping you get started and dig deep. 