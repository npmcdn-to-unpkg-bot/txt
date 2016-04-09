---
layout: post
published: true
date: 2014-07-02
title: "Skyscrapers & Sandcastles"
---

There are two ways to build digital products — sandcastles or skyscrapers. They're both effective, but care should be taken when mixing them.

## Sandcastles

Sandcastles are great for prototyping ideas. Whether it's a weekend hackathon project, an afternoon messing around in a REPL, or a two week 'JFDI' sprint, it's really powerful to be able to just get things out of your head, into a browser and in front of users.

The CSS may be gross, the errors not handled and Ruby a little janky, but if you’re clear about __why__ you're hacking, hacking is a great tool to have. The quicker you can build, the quicker you can validate your ideas, and tight feedback loops are critical to making great products. Sandcastles don’t mind when they get washed away by the tide at the end of the day.

Everything we built at [Makeshift](http://makeshift.io) started out in this way - a hack that we built quickly and showed to users as soon as possible.

## Skyscrapers

That's not to say that all products should start out as hacks. _Actually building things properly_ also has it's place. This is a weird paragraph to write, actually — I didn't think I'd ever have to justify writing good code. But yeah. Some things you have to build properly to start with. Everything else should really end up being built properly *eventually*. There comes a point where you actually need things tested. You need modular, reusable code - a codebase that Google won't laugh at when they inevitably acquihire you.

And it's that transition between the two that's the difficult thing to manage.

## "No total rebuilds"

So much has been written on the painful death-march that accompanies ground-up rebuilds of existing products. There will be day-long sprint planning meetings and a grumpy Product Manager yelling at you all the time and…

Yup, not fun. Total rebuilds of big legacy products are a massive pain. But there's one time that they're justified.

## Skyscrapers built on sandcastles

In an early-stage startup, one of the surest ways to acquire a big, ganky, legacy codebase is to build a skyscraper on top of your sandcastle.

After two weeks of heads-down hacking, you post _InstaYoDogBook.io_ on [Product Hunt](http://www.producthunt.co/). The upvotes roll in. Dave Morin liked it; you get a one-sentence email from a VC. They want to give you 15 squillion dollars for 80% of your company. You get written up on TechCrunch, and some compromising photos from university get posted to ValleyWag. Success!

Great scenario. Traction! People like your app! Let's keep #hustling, right?

Maybe you take a week or two off from the codebase to #GetOutOfTheBuilding and #TalkToUsers and #DoMoreLeanStuff. This goes well. Back to the code. There are bugs to squash and #JobsToBeDone to, er, be done.

Fire up Vim. Shit. You realise that your first 10 000 users are all logging in through a 30 line ```if``` statement. That's never going to hold up! What idiot wrote it? ```git blame```. You did, apparently, but you have no recollection of it. Commit time? 4am. Commit blood-Red Bull level? Lots, probably. You look around, and the whole app is built like this. Who built that thing there? You did, too. Actually, you were being super lean and hacky and built the whole thing, it's all your fault.

This is your sandcastle. What you've done is built a very, very brittle product, very quickly. Your sandcastle was absolutely perfect for what you wanted when you were just trying to get something built before the tide came in, but it's ill-equipped for your needs as you grow the product. How does any of this work? Why on _earth_ did you call that variable ```foo``` and forget to rename it? This isn't fun! Where do you go from here?

Write some friggin' tests, dummy! (Unless you're DHH, in which case move swiftly along). You try—you try so hard—to pull the app back into a state which is manageable to build on. Add ```rspec``` and a bunch of trendy testing bits to your ```Gemfile```. Every new class should have a Single Responsibility and follow the Law of Demeter and have descriptive method names and…you get the point. You turn over a new digital leaf and promise to do everything right in future.

But things won't change, I promise. Good code can't be written on top of bad code, skyscrapers can't be be built upon sandcastles. Validation is the most important thing when you're building a product, but once you've got that you have to be ruthless and optimise for developer productivity. No one wants to work on a 2-month-old insta-legacy app.

The good thing about being a few weeks or months into a product versus a 5 year old behemoth, though, is that you can quickly & cheaply throw away everything you've done and do it again, properly, when the time is right.

Don't build skyscrapers when sandcastles will suffice, but when you move onto a skyscraper down the road, make sure you kick over that sandcastle and start again.
