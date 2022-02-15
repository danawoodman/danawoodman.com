---
title: "Enable spellcheck for markdown files in vim"
published: 2014-04-18
categories: [How Tos, Vim]
draft: true
---

If you want to enable spellchecking for only certain file types, like Markdown files, put the following line in your `.vimrc`:

```vim
" Turn spellcheck on for markdown files.
autocmd BufNewFile,BufRead *.md set spell
```

You can apply this regex to match other extensions as well, go crazy.
