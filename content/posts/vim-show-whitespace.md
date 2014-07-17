---
title: "Show whitespace characters in vim"
date: "2014-04-29"
tags: ["vim"]
---
I like to be able to see the whitespace characters in my editor, specifically I like to see when code is indented with tabs versus spaces:

![whitespace screenshot](http://cl.ly/VGCh/Screen%20Shot%202014-04-29%20at%2012.08.19%20PM.png)

Add the following to your `.vimrc` to display a cute arrow unicode character for tabs in vim:

```vim
" Show extra whitespace
set list
set listchars=tab:➪  
```

`list` tells vim to show tabs and `listchars` sets the characters to use when display tabs.

You can change the arrow to any valid unicode character that your chosen font supports. Play around and find something you really like.
