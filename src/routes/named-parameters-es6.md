---
title: Using named parameters in ES6
published: 2015-09-23
tags: [javascript]
---

Now with ES6 you can simulate named parameters in JavaScript using the new object destructuring features.

Below is an example of a function with named parameters where all parameters are optional.

```js
function something({ a = true, b = "something...", c = [] } = {}) {
  // do your magic here...
}

// Usage:
sendEmail({ to: "a@example.com" });
```

You can also combine this with positional arguments like so:

```js
function something(a, b, { c = 1 }) {
  //...
}
```
