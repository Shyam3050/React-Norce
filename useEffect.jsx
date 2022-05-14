import React, { useState, useEffect } from "react";
const App = (props) => {
  const [value, updated] = useState(1);
  const [value2, updated2] = useState(2222);
  const [value3, updated3] = useState(3);

  useEffect(() => {
    console.log("hello world");
  }, [value3]);
  // this code work first time then exicute when value3 is updated.
  ////////////////////////////
  // useEffect(() => {
  //   console.log("hello world");
  // }, []);
  // this useEffect will exicute onece if component re-render useEffect not exicute again
  // because here we use empty array
  // ////////////////////////////////
  // useEffect(() => {
  //   console.log("hello ");
  // });
  // this hook exicute whenever component re-render
  const increase = () => {
    updated(value + 1);
  };
  const decrease = () => {
    updated2(value2 - 1);
  };
  const hifi = () => {
    updated3(value3 + 5);
  };

  return (
    <React.Fragment>
      <h3>{value}</h3>
      <h3>{value2}</h3>
      <h3>{value3}</h3>
      <button onClick={decrease}>decrease</button>
      <button onClick={increase}>increase</button>
      <button onClick={hifi}>hifi</button>
    </React.Fragment>
  );
};
export default App;
