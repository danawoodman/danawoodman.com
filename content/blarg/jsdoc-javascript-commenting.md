---
title: "Using jsdoc style commenting in JavaScript"
date: "2014-05-02"
tags: ["javascript"]
draft: true
---
File this one under "note to self", but knowing how to properly comment your JavaScript is an important part of being a proficient developer.

At the time of this article, [jsdoc](https://github.com/jsdoc3/jsdoc) seems to be the industry standard for documentation formatting in the JavaScript world. It's a succinct and helpful way to comment your JavaScript classes and methods.

To get started, first install jsdoc globally:

```bash
npm intall -g jsdoc
```

Now that it's installed, you can run it on one of your JavaScript files:

```bash
jsdoc myfile.js
```

Of course you could do this every time you update your files, but if you're really cool you can put it into your build process using something like [Gulp](http://gulpjs.com/), [Grunt](http://gruntjs.com/) or the Rails asset pipeline.

Ok, with setup and running out of the way, let's write some docs! Here is a sort of all-in-one example:

```js
/**
 * @class
 */
function User() {}

/**
 * A very helpful but brief description of the create method.
 *
 * @author Dana Woodman <dana@danawoodman.com>
 *
 * @param {string} name - The name of the new user.
 * @param {number} age - The age of the person.
 * @param {User~userCallback} callback - The callback that handles the response.
 *
 * @returns {user} the new user object.
 */
User.prototype.create(name, age, phone, callback) {
  // Do some magic here...
  return user;
}
```

Make sure to check out [usejsdoc.org](http://usejsdoc.org/) for a bunch of useful references and setup guides.
