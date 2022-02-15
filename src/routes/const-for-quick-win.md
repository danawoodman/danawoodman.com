---
title: Use the "const" keyword for a quick FP win
published: 2015-07-20
# tags: [javascript, fp]
draft: true
---

If you want a quick way to enforce some FP (Functional Programming) in your JavaScript code then use the `const` keyword instead of `var` and `let`.

```js
// Will allow you to redefine the variable's value:
var message = "hello";
message = "goodbye";

// Will throw an exception when you attempt to redefine:
const message = "hello";
message = "goodbye"; // Uncaught TypeError: Assignment to constant variable.
```

Using `const` will raise an exception if it's value is redefined, forcing you to create new variables instead of mutating existing ones.

Note that this will not detect changes _within_ objects, arrays and other complex types. So this will _not_ raise an exception:

```js
const nums = [1, 2, 3, 4];

nums.push(5); // totally valid

nums = [0]; // Will throw an exception still tho
```

This is because the **reference to the object or array does not change**. You have to actually change the reference for the `const` keyword to know you're redeclaring the value. Make sense?

And, of course you'll need to be using something like [Babel](https://babeljs.io/) since this is a feature in ES6 (ES2015) and isn't support in all environments/browsers yet.
