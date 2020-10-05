---
title: "Adding API implementations to your LibGuides"
layout: layouts/post.njk
categories: APIs for Librarians 
tags: [libguides, post, "APIs for Librarians", projects, APIs, javascript, guide]
date: 2017-12-21
---

At the time of this writing all of the content on [APIs for Librarians](https://www.bradcoffield.com/APIs-for-librarians) can be easily added to your guides. This guide will take you step by step, with screenshots.<!--excerpt-->

### TLDR:

You'll need an HTML box and a Media/Widget box and any custom CSS added to the page's custom CSS. We add our javascript in the Media/Widget box and not at the page level because of the page level character limit.

### Full instructions:

#### Add a new box

Add a new box as you would any other. ![Adding a box in LibGuides](/assets/4posts/screenshot.305.jpg)

#### Add a Rich Text/HTML Content Block

![Adding rich text/HTML](/assets/4posts/screenshot.306.jpg)

Your basic building block of LG. This is where we will put the HTML portion of our API implementation. Take note, you have to add it via the HTML editor portion and **not** as rich text.

![Use the HTML editor](/assets/4posts/screenshot.308.jpg)

#### Add a Media/Widget Content Block

![Adding a media/widget content block](/assets/4posts/screenshot.307.jpg)

This is where we will post the Javscript portion of our business. You must wrap the code from [APIs4](https://www.bradcoffield.com/APIs-for-librarians/) in script tags: `<script> </script>`

![Pasting into the widget area](/assets/4posts/screenshot.309.jpg)

#### Add Custom CSS to the Page's CSS

![Adding to the guide's custom CSS](/assets/4posts/screenshot.310.jpg)

Near the top of the screen is where the buttons are that will allow you to add things to your guide's custom CSS. We don't add our javascript here because of the character limit. Make sure you wrap your CSS in style tags: `<style></style>`

![Actually putting your CSS in](/assets/4posts/screenshot.311.jpg)

#### All done!

Congrats! You just harnessed some API power!

If you have questions feel free to [contact me](https://www.bradcoffield.com/contact).
