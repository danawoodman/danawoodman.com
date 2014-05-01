---
title: "Fall in love with go's for loop"
date: "2014-02-02"
tags: ["go"]
---
The `for` loop in Go is incredibly robust and fun to use. Here are a few examples of how to use `for` loops for various use cases:

```go
# Infinite loop:
for {
    # Do stuff forever...
}

# "Traditional" index loop:
for i := 0; i < 100; i++ {
    # Do stuff 100 times...
}

# Range with key and value:
for key, value := range arr {
    # Do stuff on everything in arr 
}

# Range with just key:
for key := range arr {
    # Do stuff on everything in arr 
}

# Range with just value:
for _, value := range arr {
    # Do stuff on everything in arr
}
```

Learn more about the [Go `for` loop here](http://golang.org/doc/effective_go.html#for)
