import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${resourceType}`)
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [resourceType]); // does something everytime the resourceType changes

  /* 
  Lets say we want one to ONLY run onMount

  You can do this by passing an empty array:

   useEffect(() => {console.log('onMount')}, []);

   This will only run when the app/component loads

  */

  return (
    <div>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

export default App;
