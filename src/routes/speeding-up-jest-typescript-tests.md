---
title: Speeding up Jest Typescript tests
published: 2020-04-03
categories: [How Tos, JavaScript, Jest]
---

In you `tsconfig.json`, make sure you ignore test files, like:

```js
{
  // ... rest of your tsconfig.json...
  "exclude": [
    "node_modules",
    "**/*.test.tsx?"
  ]
}
```

This will often drastically speed up your test runs.
