---
title: '"npm install" Without Sudo on Ubuntu Linux'
layout: layouts/post.njk
categories: guides 
tags: ["javascript", "nodejs", "npm", "linux", "guide", "post"]
date: 2020-10-04
---

Did you know that if you install your system's [Node.js](https://nodejs.org/en/) with [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) you don't have to use `sudo` all the time?! 

Using `sudo` to install NPM packages is a risky proposition, as far as security is concerned. A couple other people going into the details as to why that's a bad idea: [Don’t Use sudo with npm …still](https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-still-66e609f5f92) &&  [https://givan.se/do-not-sudo-npm/](https://givan.se/do-not-sudo-npm/)

For years I used `sudo` for everything npm... Oops.

I never started using nvm despite it being well-regarded and oft recommended because it's primary function is to allow you to quickly switch between versions of Node. The use-case as I understand it is if you're working on different projects that have different Node version requirements. And I'm like.... slow down hossbucket, you're getting pretty fancy over there. I've only ever had to use the latest active LTS and my Node life has always been sunny.

But! if you remove all your former Node installs (for instance with your package manager) and then install nvm ([see the instructions on their repo](https://github.com/nvm-sh/nvm#installing-and-updating)) you now can `npm i` things without sudo! Not only is a major security boost but now you don't have to type sudo and your password every time, which while a minor benefit is still welcome.


