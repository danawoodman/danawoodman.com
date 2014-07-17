---
title: "Deploying a go application on Heroku"
date: "2013-12-09"
---
<iframe src="http://player.vimeo.com/video/93459202" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

View the [source code for this video on Github](https://github.com/sourcetank/1-deploying-go-on-heroku)

Here are the shell commands from the video:

```bash
go run server.go
PORT=5000 go run server.go
git add .
git commit -m "initial app"
heroku create -b https://github.com/kr/heroku-buildpack-go.git
git push heroku master
```

Here is the content of the `server.go` file:

```go
package main

import (
  "fmt"
  "net/http"
  "os"
)

func sayHello(w http.ResponseWriter, r *http.Request) {
  fmt.Fprintln(w, "Hello World!")
}

func getPort() string {
  p := os.Getenv("PORT")
  if p != "" {
    return ":" + p
  }
  return ":1234"
}

func main() {
  port := getPort()

  http.HandleFunc("/", sayHello)

  fmt.Println("Listening on port", port)
  err := http.ListenAndServe(port, nil)
  if err != nil {
    panic(err)
  }
}
```

Here is the content of your `.godir` file:

```bash
myapp
```

And for your `Procfile`:

```bash
web: myapp
```

## Reference

- [Heroku Go BuildPack](https://github.com/kr/heroku-buildpack-go)
- [`os.Getenv` function reference)](http://golang.org/pkg/os/#Getenv)
- [GoSublime: SublimeText package for Go](https://github.com/DisposaBoy/GoSublime)
