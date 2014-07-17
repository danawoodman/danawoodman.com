---
title: "Interactively add content in git"
date: "2014-03-02"
---
It's often handy to add changes you've made to your local branch in git in a more interactive fashion. Sometimes the changes you have make more sense in multiple commits than one catch all commit.

It's quite easy to do this in git and here's how:

```bash
git add -p
```

The `-p` flag say to add changes interactively, breaking cohesive changes up into chunks. Here's roughly what it will look like:

![interactive git add](http://cl.ly/VHFO/Screen%20Shot%202014-04-30%20at%209.00.31%20AM.png)

Now that you see your changes, you have a few options:

- `y` -- Add the given chunk.
- `n` -- Skip the given chunk (eg "next").
- `s` -- Split the given chunk up into smaller chunks.
- `q` -- Stop adding chunks and exit out of `add`.
- `?` -- See all the other available sub commands.

Hope that's helpful.
