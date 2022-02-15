---
title: React "Hello World" examples
published: 2020-04-25
categories: [How Tos, JavaScript, React]
draft: true
---

Below is a small collection of React examples to get anyone started using React. They progress from simpler to more complex/full featured examples.

This article is intended specifically for people who are new to React. If you're a React veteran, you might want to skip sections you know or check out one of [my other posts](/articles) instead.

## First Step

The absolute simplest way to start playing with React is to import the packages React, ReactDOM and the Babel transformer (which handles converting JSX) into an HTML page, like so:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React Hello World</title>
  </head>
  <body>
    <!-- The component to render our React application into. -->
    <div id="app"></div>

    <!-- Import React, ReactDOM and babel so we can use JSX in the browser. -->
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

    <!-- Use Babel so we can render a React component with JSX. -->
    <script type="text/babel">
      ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("app"));
    </script>
  </body>
</html>
```

This will allow you to start playing around with React without installing any tools or having anything installed on your computer. [Learn more about how to add React to a website](https://reactjs.org/docs/add-react-to-a-website.html).

**In production, you should not use this approach** and should instead look at using something like [create-react-app](https://github.com/facebook/create-react-app), [WebPack](https://webpack.js.org/), [Parcel](https://parceljs.org/) or [Rollup](https://rollupjs.org/guide/en/) to compile JSX into JavaScript. Also, [checkout the getting started guide](https://reactjs.org/docs/getting-started.html).

## The Basics

The simplest React component ever.

It just renders an `<h1>` tag into the `#app` div of the page. Since
JSX is basically just HTML, you can use any valid HTML tag you want.

```js
React.render(<h1>Hello World!</h1>, document.getElementById("app"));
```

## Recommendations before you continue

If you're new to React, I highly recommend you **start by creating a new React application with create-react-app** since it is the standard way to make Single Page Apps (SPAs) in React and gives you all the tools you need to get started.

If you have a recent version of Node.js installed, you can run:

```bash
npx create-react-app my-app
```

This will create a folder called `my-app` and install React and all the tools needed to make a React application. You can of course use whatever name for your app that you want.

Now, follow the instructions on screen to get started then open that folder in your editor and open up `src/App.js`.

**Note:** if you want to use React with Typescript, run:

```bash
npx create-react-app --template typescript my-app
```

## Creating a component

There are two ways to create components in React. One is a "class" component which uses JavaScript classes to define components. The other way, and the way I will use in this entire post, is "functional" components which use JavaScript functions to define components.

I prefer to use functional components because I find them simpler to reason about and they allow the use of Hooks (which I explain below). Ultimately, both are totally valid and you should use what you (and your team) prefer, there are no "right" answers as to which to use.

```js
import React from 'react'
import ReactDOM from 'react-dom'

function HelloMessage({message}) {
    return <h1>Hello {message}!</h1>
})

React.render(<HelloMessage message="World" />, document.getElementById('app'))
```

This takes the JSX (the HTML-looking code after `return`) and renders it into the div.

You will also come across another form of React components which is using an arrow function instead:

```js
const HelloMessage = ({ message }) => <h1>Hello {message}!</h1>;
```

Using arrow functions can make your components a bit more compact if they are simple components. I personally prefer to use traditional `function`s for the following reasons:

1. It is clearer to developers it is a function since the `function` keyword is more explicity than a `const` + arrow function, especially for people new to JS or new to ES6 arrow functions.
2. It uses almost the same amount of characters as a arrow function (actually a few less) for any non-trivial components (one that has a block body and not an immediate return, that is):
   ```typescript
   function Hello() {}
   const Hello = () => {};
   ```

Again, you can use whichever you prefer, at the end of the day they are effectively the same with some very minor differences.

_Note: In the following examples I will omit the imports of React and ReactDOM to keep examples simpler._

## Notes about props

Some important notes about props:

- Use `className` if you want to pass in CSS classes: `className="container"` will translate to `class="container"` in your HTML.
- Use `htmlFor` if you want to use the `for="some-input"` attribute for linking a `<label>` to a form input.
- Use `style={{ maxWidth: '40rem' }}` to define styles, not as a string as you would normally in HTML. All keys are camelCased.
- If you do not pass a value to a prop, it is treated as a boolean `true` value, e.g. `isAdmin` is the same as `isAdmin={true}` but more succinct.

## Different types of props

You can pass any valid JavaScript in as props including strings, numbers, booleans, arrays, objects, functions and other React components:

```js
function Everything() {
  return (
    <AnotherComponent
      name="Some component"
      users={10}
      ages={[18, 32, 45, 29]}
      currentUser={{ name: "Some Dude", age: 34, admin: true }}
      onClick={(e) => console.log(e.currentTarget.value)}
      isAwesome
      isLame={false}
    />
  );
}
```

Note for `isAwesome` we pass no value. When this happens, the prop is set to `true` so it is equivilent to `isAwesome={true}`.

## Returning multiple elements

You have two main options if you want to return multiple JSX elements. One is to just wrap them in a parent tag. The other is to return an array. With the second option, you'll need to give each element a unique `key` property so React knows the exact position and order of the items.

**Option 1:**

```js
function Multiple() {
  return (
    <>
      <ElementOne />
      <ElementTwo />
      <ElementThree />
    </>
  );
}
```

**Option 2:**

```js
function Multiple() {
  return [
    <ElementOne key="element-1" />,
    <ElementTwo key="element-2" />,
    <ElementThree key="element-3" />,
  ];
}
```

Generally speaking, using option 1 is preferred since then you don't need to construct your own keys for elements. However, you may find situations where option 2 makes sense for your application.

## Managing State

Managing state in React applications is a complicated subject and there are many ways to accomplish it. In the example below, we are using [Hooks](https://reactjs.org/docs/hooks-intro.html) which is a somewhat new feature of React and is quickly becoming the go-to tool in the React developer toolbox.

One important caveat with Hooks; you can only use them in `function`al components, not `Class` components.

This component sets the intial state of the component and then, when a button is clicked, it updates the state. When the state updates, the component intelligently and efficiently re-renders.

```js
function ToggleText({ original, alternate }) {
  // Default to showing the "original" message.
  const [showOriginal, setShowOriginal] = React.useState(true);

  // Toggle the "showOriginal" value every time this function is called.
  const toggleDisplay = () => setShowOriginal((val) => !val);

  // If toggled, show the alternate message.
  const message = showOriginal ? original : alternate;

  return (
    <div>
      <h1>Hello {message}!</h1>
      <button onClick={toggleDisplay}>Toggle</button>
    </div>
  );
}

React.render(
  <ToggleText original="World" alternate="Mars" />,
  document.getElementById("app")
);
```

Note that the `onClick` is practically the same as the JavaScript `onClick` event handler. There are many common browser events that are supported by React. See them all at: <https://reactjs.org/docs/events.html>

We use a callabck function in the `setShowOriginal` function so we are guaranteed to get the right value for `val`. If we didn't do this, the value `val` could change since updating state in React components is _asynchronous_.

## Rendering children in a component

Often times, you will want to render some JSX _within_ another React component. Using `children`, this becomes easy:

```js
function Modal({ children }) {
  return <div className="modal">{chidlren}</div>;
}

function HelloModal() {
  return (
    <Modal>
      <h1>Hello World!</h1>
    </Modal>
  );
}
```

This renders the `<h1>` tag inside of the `<Modal>` component. This conceptually works exactly like HTML tags except that `children` is a "magic" prop that all React components have access to. This way you can render `children` anywhere in your component you want.

## Combining components together

The most fundamental and useful part of React is that you can create any number of components and nest them just like you would any HTML tag. You pass down data to your components from parent components in a one-way data flow (using `props`).

This is a very simple example of using a sub-component which gets passed data from a parent componet using props:

```js
function ProductItem({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductsList({ products }) {
  return (
    <table>
      {products.map((product, key) => (
        <ProductItem key={key} product={product} />
      ))}
    </table>
  );
}

// Could come from an API, LocalStorage, another component, etc...
const products = [
  { name: "Toast", price: 1499 },
  { name: "Bacon", price: 3245 },
  { name: "Coffee", price: 300 },
];

React.render(
  <ProductList products={products} />,
  document.getElementById("app")
);
```

_Note: If you use something like Redux/Context you have a bit more power when it comes to data storage and event handling, but is a bit beyond the scope of this article._

## Fetching data from an API

A very common use case in React is to fetch data from an API. Here is a very simple approach using the `useEffect` hook including loading state. There are again, many ways to approach this problem and many great libraries to help you, but this is just using pure React:

```js
function UserDetail({ userID }) {
  // Setup our initial state.
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  // This "effect" will get called any time the "userID" value
  // changes (see second argument to the function).
  React.useEffect(() => {
    // Indicate the request has started and clear any pre-existing errors
    // and state.
    setLoading(true);
    setError(null);
    setUser(null);

    // Use the browser "fetch" method to get a user from the API.
    fetch(`https://myapi.com/user/${userID}`)
      // Take the incoming response and convert it to JSON.
      .then((res) => res.json())

      // Set the user state after converting to JSON.
      .then(setUser)

      // Handle any errors if they occur.
      .catch(setError)

      // Indicate loading is done.
      // Note: this requires a ".finally" polyfill, which CRA provides.
      .finally(() => setLoading(false));
  }, [userID]);

  // API request is loading.
  if (loading) return <em>Loading...</em>;

  // API returned an error.
  if (error) return <Alert>{error.message}</Alert>;

  // No user found from API.
  if (!user) return <Alert>No user...</Alert>;

  // If the request isn't loading, there are no errors and a user
  // was found, let's show the user info.
  return (
    <>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </>
  );
}
```

## Conditionally rendering components

A common scenario in React is rendering different components depending on a certain condition. One simple way is to "return early" like in our example above. However, sometimes you want to do this conditional rendering inside a component. To do that, one approach is to use a "ternary expression" like so:

```js
function Toggle() {
  const [on, setOn] = React.setState(false);

  const toggle = () => setOn((v) => !v);

  return (
    <div>
      {on ? <h1>ON!</h1> : <h1>OFF!</h1>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

If you instead don't need a fallback component, you can use a boolean comparison approach like so:

```js
function Toggle() {
  const [on, setOn] = React.setState(false);

  const toggle = () => setOn((v) => !v);

  return (
    <div>
      {on && <h1>ON!</h1>}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

This evaluates the expression `on` and if it is "truthy" then we render the `<h1>` tag otherwise we render nothing.

## Conclusion

Well, that's all for today. Hope you got some useful information out of this!

I'll attempt to keep this post current as React (inevitably) evolves.

<!--
Other sections:
- A timer using "useEffect" and cleanup
- useContext and providers
- useReducer
- useRef
-->
