---
title: Go packages are your friend
published: 2014-02-21
categories: [HowTos, Golang]
draft: true
---

The approach I've been taking lately is to start my projects in the `main` package and as I go _keep an eye for any emerging patterns_ or abstractions I can make.

Once I see something I feel can be pulled out of my code, I put it into a sub-directory in my project, give it a descriptive package name and then _import it into my main package_.

If a package is specific to the project I'm working on and would have little value as an external library, I'll keep it in the sub-directory. Otherwise, I will abstract out the package into it's own repository and _think more seriously about the public interface_.

Go makes creating new packages trivially easy: Just create a new folder `foo`, move your `foo` library over and change `package main` to `package foo`. I'd recommend taking advantage of that fact and abstract and encapsulate your code as much as possible using this convention.

This can be done in many other languages, but the fact that you can `go get` any code within a folder on Github or Google Code makes it simple to share packages with other developers or to reuse code in future projects.

If you're coming from a Ruby background like myself where you'd have to create a new Ruby Gem each time, you can see how this encourages code reuse at a language level.
