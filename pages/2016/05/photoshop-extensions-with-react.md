---
layout: post
title: Photoshop Extensions with React & Redux
date: 2016-05-19
published: false
---

I’ve been working on a web-based design tool for a few months (more on that
soon). After demoing it today someone asked if they could use it with Photoshop.
The quick answer was “no, it's a web app that renders React components”, but I
realized I'd been avoiding even exploring Photoshop extension creation, so I
took the afternoon and looked into it.

The ecosystem is…interesting…

There are a TON of outdated buzzwords out there, but eventually I found great
resources on [Davide Barrance’s blog](http://www.davidebarranca.com/).

Turns out the panels are basically HTML + CSS + JS that communicate with
CreativeCloud apps through JSX files (not that kind of JSX. Adobe ExtendScript).

ExtendScript sucks a lot but I figured I could take _some_ of the pain out of
the process and at least build the UI how I know best - React, Redux and Ramda.

[Figured I'd share in case you’re feeling
masochistic…](https://github.com/jongold/photoshop-react-redux-ramda)

