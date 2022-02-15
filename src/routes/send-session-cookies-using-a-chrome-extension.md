---
title: Send session cookies using a Chrome extension
published: 2015-12-30
# tags: [javascript,express,node,chrome-extension]
draft: true
---

I recently needed to send an AJAX request to a secure web service (a Node.js + Express service using Passport in particular) from within a Chrome extension and was hitting an issue with the web server not getting sent the session cookies for the domain. Here is how I solved it:

First, in your `manifest.json`, you need to declare your permissions properly for both `cookies` and the domain you're requesting from:

```json
{
  "name": "My Extension",
  "description": "...",
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["foreground.js"]
    }
  ],
  "permissions": ["cookies", "https://mydomain.com/"],
  "manifest_version": 2
}
```

Now in your content script (here, `foreground.js`), you need to send along the cookie with the request. I am using [`whatwg-fetch`](https://github.com/github/fetch) which is a HTML5 `fetch` polyfill library:

```js
fetch("https://mydomain.com/api/users", {
  credentials: "include",
})
  .then((data) => data.json())
  .then((data) => console.log("data", data));
```

The `include` part tells Chrome that you want to send a CORS request to the server which sends along the cookies properly.

Now you should be able to send requests to a secure webservice with your Chrome extension. This is particularly useful if you have an extension that needs to only work when a user is authorized and logged in.
