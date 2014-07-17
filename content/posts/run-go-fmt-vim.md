---
title: "Run 'go fmt' in vim on save"
date: "2014-04-25"
tags: ["go", "vim"]
---
One of the really awesome things about Golang is the `go fmt` command which forces your code to conform to a common formatting convention. 

However, running a file through `go fmt` isn't automatic out of the gate, but if you use vim the following snippet will cause `go fmt` to be run every time you save a go file.

```vim
" Run go-fmt on Go source code on save.
autocmd FileType go autocmd BufWritePre <buffer> Fmt
```

Try this out next time you're writing go and you'll be happy you have it.

