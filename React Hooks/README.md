**Create React App Using Vite:**  npm create vite@latest

# React Hooks

[React Docs](https://beta.reactjs.org/apis/react)

# The Basics

## useState

- allows us to track state in a function component.

**useState** accepts an initial state and returns two values:

1. The current state.
2. A function that updates the state.

```
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
  const [<current state>, <function to set state>] = useState(<starting state>)
}
```

## useEffect

- The useEffect Hook allows you to perform side effects in your components. Examples of side effects are: _fetching data_, _directly updating the DOM_, and _timers_.

_useEffect accepts two arguments_ — the second argument is optional.

```
useEffect(<function>, <dependency>)
```

## UseContext

### Context API

- With the context API you can specify certain pieces of data that will be available to all components nested inside the context with no need to pass this data through each component. It is essentially semi-global state that is available anywhere inside the context.

### useContext

- In order to use context in a function component you no longer need to wrap your JSX in a consumer. Instead all you need to do is pass your context to the useContext hook and it will do all the magic for you. Here is an example.
