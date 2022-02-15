---
title: Require local NPM packages in Node.js
published: 2015-02-08
tags: [node, javascript]
draft: true
---

NPM after version 2.0 has added the ability for developers to install local packages into their projects easily.

You would want to use a local package for a few reasons, but most commonly is when you're developing a module and you want to test it out locally.

The docs discourage using this technique in production projects but don't give clear arguments as to why.

You can follow this same technique to break your application up into sub components that you could eventually make into their own NPM modules. Doing this allows you to not have to use relative `require`s

First, you need to make sure that you are using at least NPM v2.0 or newer: `npm -v`

Now, create your project module:

```bash
mkdir my-app
cd my-app
npm init # follow prompts...
```

Now create your sub-module:

```bash
mkdir submodule
cd submodule
npm init # follow prompts...
vi index.js # write your application code here...
```

Now install your local module:

```bash
cd ..
npm i --save ./submodule/
```

Now you can use your submodule in your main application like it was downloaded from NPM and in your `node_modules` directory:

```js
var sub = require("submodule");

console.log(sub("some params"));
```

You can install local modules in a variety of other ways:

- `../my-lib` - relative to the current directory
- `/my-lib` - relative to the root directory of your computer
- `~/my-lib` - relative to your home directory
