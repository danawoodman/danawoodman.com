---
title: "Implementing splat args in JavaScript"
date: "2014-03-24"
tags: ["javascript"]
---

Typically in JavaScript you'll define the arguments you expect in a function like so:

```js
function sayHello(message, recipient) {
  // Do something exciting here...
}
```

But what happens when you want to pass an **arbitrary amount of arguments to a function**, or what is often termed "splat args" in other languages?

Well, JavaScript provides a special property called `arguments` that is scoped to the function call. You can implement a form of splat args with JavaScript using the following approach:

```js
function sayHello(message, recipient) {
  // args is an array of arguments passed into the function.
  var args = Array.prototype.slice.call(arguments, sayHello.length);
  // Do something exciting here...
}

// Now you can call sayHello with any number of arguments:
sayHello('Hello there!', 'John Smith', some, extra, args);
```

This short line takes the arguments list and calls `Array.slice` to get all the extra arguments beyond the position arguments.

`sayHello.length` is the length of the arguments passed into the function so we're able to get all arguments after the last positional argument and put them into an array.

Until the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) and [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/rest_parameters?redirectlocale=en-US&redirectslug=Web/JavaScript/Reference/rest_parameters) is implemented in ECMAScript 6, we'll have to stick with the above, slightly hacky approach.

However, when these two changes are universally implemented, we'll be able to do the following instead:

```js
function sayHello(message, recipient, ...args) {
  // args will now be available and will
  // contain an array of the arguments passed in.
}
```

Or, as my friend [Alex](https://github.com/squeegy) points out, you can always use [CoffeeScript](http://coffeescript.org/).

