---
layout: post
published: true
date: 2015-05-13
title: "Framer.js for PC & Linux users"
---

One of the most common questions I see in the [Framer Facebook group](https://www.facebook.com/groups/framerjs/) is people wondering whether you need to use a Mac to run Framer. That’s understandable — the website has a screenshot of a Mac app, a download button, and a caption saying ‘available for Mac’. Here’s the thing — you can use Framer and join this wonderful community & way of working on _any platform_. Let me explain…

The app you see in the screenshots on the [Framer website](http://framerjs.com/) is ‘Framer Studio’. It’s a paid app, for OSX only. The thing that powers it though—Framer.js—is open source, and available for free on GitHub.

To save you having to compile the source, Framer provide a simple [.zip file](http://framerjs.com/static/downloads/Framer.zip) to get you started - including all of the JavaScript you need, and an HTML file to open in your browser. It’s that simple to get started with Framer on Windows or Linux!

## So what’s Framer Studio? Where’s that lovely UI?
Framer Studio is a collection of tools around Framer.js itself. Some of these are unique, some of them you can replicate yourself on _any computer_. It won’t be as smooth as using Framer Studio on a Mac, but certainly easier than making a trip to the Apple Store.

Some of the notable features:
- CoffeeScript compilation
- LiveReload

More on those in a second. Some features that you can get an approximation of in  any editor (e.g. [Sublime Text](http://www.sublimetext.com/)):
- Syntax highlighting
- Snippets
- [Autocomplete](https://github.com/awt2542/SublimeCompletionFramerjs)

And then some more nifty things that are unique to the Mac app:
- Templates
- Sharing
- Presentation view
- Mirror
- Zoom
- Sketch/Photoshop importing

Framer Studio is definitely **optional**, but the features you get are **really nice**.

With that said: CoffeeScript!

## Why does my code break when I try to run the examples from the website?
[That link](http://framerjs.com/static/downloads/Framer.zip) you just download is in **JavaScript**. Framer Studio, and all of the examples on the website, are in **CoffeeScript**.

[CoffeeScript](http://coffeescript.org/) is a version of JavaScript with a bunch of nifty features, but most importantly for us, it gets rid of a bunch of brackets. JavaScript **needs_** those brackets.

For example, the first page of [Framer Basics](http://framerjs.com/learn/basics/) shows you how to create a simple layer.

```
layerA = new Layer
  x: 0, y: 0, width: 100, height: 100
```

If you try to add that to the `app.js` file you downloaded, you’ll be confronted with some nasty errors. In JavaScript it should look more like this:

```
var layerA = new Layer({
  x: 0,
  y: 0,
  width: 100,
  height: 100
});
```

Not too different, but enough to make your web browser complain! Let’s look at a more complex example and then I’ll show you how to fix it :)

```
layerA.animate 
  properties:
    x:200
  curve: "ease-in-out"

layerA.on Events.AnimationEnd, ->
  layerA.animate
    properties:
      x:100
    curve: "ease-in-out"
```

In JavaScript that would be more like

```
layerA.animate({
  properties: {
    x: 200
  },
  curve: "ease-in-out"
});

layerA.on(Events.AnimationEnd, function() {
  layerA.animate({
    properties: {
      x: 100
    },
    curve: "ease-in-out"
  });
});
```

At this point, there’s a few things you could do.
* You could translate every line of CoffeeScript you read on the Framer website & in other peoples’ code into JavaScript in your head.
* You could use a website like [JS2Coffee](http://js2.coffee/) and get it to translate itself, then copy & paste that into your project.
* Or, you can just set up CoffeeScript on your PC.

I really recommend the third option. If you’re a relative newcomer to JavaScript, you don’t need the added hassle of hoping your code matches up to the code you’re reading in a tutorial. It’s much nicer to use the same language as the rest of the community.

Luckily, it’s pretty easy to get it all wired up.

## The easy way
Whilst there’s nothing like Framer Studio for Windows or Linux, there are some other nice apps that can help us out.

[Prepros](https://prepros.io/) is available for Windows, Linux & Mac, and helps you compile CoffeeScript (as well as Sass, LESS, Jade & others — you can use this for lots of projects besides Framer). To get started, install & open the app, then add the `Project` folder from the .zip you downloaded earlier.

Next, rename `app.js` to `app.coffee`, and replace its contents with some CoffeeScript. Here’s what it converts to:

```
iconLayer = new Layer width:256, height:256, image:"images/icon.png"
iconLayer.center()

# Define a set of states with names (the original state is 'default')
iconLayer.states.add
  second: {y:100, scale:0.6, rotationZ:100}
  third:  {y:300, scale:1.3, blur:4}
  fourth: {y:200, scale:0.9, blur:2, rotationZ:200}

# Set the default animation options
iconLayer.states.animationOptions =
  curve: "spring(500,12,0)"

# On a click, go to the next state
iconLayer.on Events.Click, ->
  iconLayer.states.next()
```

Then…
- Drag your folder into Prepros.
- Click on `app.coffee`
- Make sure ‘auto compile’ is checked
- Click ‘process file’
- Click ‘Live preview’ in the toolbar

Your browser should open, and your prototype should be running. From there, change anything you want to in `app.coffee` and your browser should magically reload.

There are some other options for compiling Coffeescript on Windows - feel free to use another GUI if that’s what you do already, but Prepress is pretty great for an open source tool.

You could also go for more fine-grained control by compiling your Coffeescript etc yourself with something like `gulp` or `grunt`, but remember, the goal is to be prototyping as quickly as possible, not getting bogged down in tool configuration :)
