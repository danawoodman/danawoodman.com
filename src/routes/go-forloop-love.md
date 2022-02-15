---
title: Fall in love with go's for loop
published: 2014-02-02
categories: [How Tos, Golang]
draft: true
---

The `for` loop in Go is incredibly robust and fun to use. Here are a few examples of how to use `for` loops for various use cases:

Infinite loop:

```go
for {
    // Do stuff forever...
}
```

"Traditional" index loop:

```go
for i := 0; i < 100; i++ {
    // Do stuff 100 times...
}
```

Range with key and value:

```go
for key, value := range arr {
    // Do stuff on everything in arr
}
```

Range with just key:

```go
for key := range arr {
    // Do stuff on everything in arr
}
```

Range with just value:

```go
for _, value := range arr {
    // Do stuff on everything in arr
}
```

Well, that's it, just wanted to highlight how one single for loop construct can accomplish so much when a language things through it's design.

Learn more about the [Go `for` loop here](http://golang.org/doc/effective_go.html#for)
