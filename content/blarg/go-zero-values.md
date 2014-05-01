---
title: "Use zero values to your advantage in go"
date: "2014-02-11"
tags: ["go"]
---
In Go, when a value is initialized *without a initializer value it returns the "zero value" of that type*.

In our contrived example below, when we initialize the `User` struct without an initialization value, we get the zero value of the struct. So when we get the `Admin` value, it returns the zero value for a boolean, which is `false`:

```go
package main

import "fmt"

type User struct {
    Name  string
    Admin bool
}

func main() {
    u := User{}
    fmt.Println(u.Admin) #=> false
}
```

We didn't explicity set `Admin` to `false`; *Go did that for us*. 

The following zero values are created for their respective types: 

- bool: `false`
- string: `""`
- int: `0`
- float: `0.0`
- pointers, functions, interfaces, slices, channels, and maps: `nil`

Next time you're working in go, think how you can use zero values to your advantage.

Learn more about [zero values here](http://golang.org/ref/spec#The_zero_value).
