import { useState } from "react";
import data from "./assets/img/image.json";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>EmojiSearch</h1>
        <input
          type="text"
          placeholder="what emoji are you looking for ?"
        ></input>
      </div>
      {data.map((elem, index) => {
        return <p key={index} elem={elem}></p>;
      })}
    </>
  );
}

export default App;
