// author Jonathan Morrissey
import React, { useState } from "react";
// IMPORTANT - we need to import useState if we want
// to use it in our application.

function App() {
  const [alpha, setAlpha] = useState(0);
  const [gamma, setGamma] = useState(0);

  // Event handlers

  const changeAlpha = () => {
    setAlpha((prevAlpha) => prevAlpha + 5);
  };

  const changeGamma = () => {
    setGamma((prevGamma) => prevGamma + 10);
  };

  return (
    <>
      <h1>Hi, this is the parent component</h1>

      <hr />
      <Robert alpha={alpha} changeAlpha={changeAlpha} />

      <hr />
      <Jennifer gamma={gamma} changeGamma={changeGamma} />
    </>
  );
}

// This is the Child component called Robert
function Robert(props) {
  return (
    <>
      <h1>Hi, this is Robert (a child component)</h1>
      <p className="alpha">
        <b>From the parent - alpha has value = {props.alpha} </b>
      </p>
      <p className="changeAlpha">
        <button onClick={props.changeAlpha}> Alpha+ </button>
      </p>
    </>
  );
}

// This is the Child component called Jennifer
function Jennifer(props) {
  return (
    <>
      <h1>Hi, this is Jennifer (a child component)</h1>
      <p className="gamma">
        <b>From the parent - gamma has value = {props.gamma} </b>
      </p>
      <p>
        <button onClick={props.changeGamma}> Gamma+ </button>
      </p>
    </>
  );
}

export default App;
