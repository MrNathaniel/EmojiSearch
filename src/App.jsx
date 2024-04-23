import { useState } from "react";
import data from "./assets/img/image.json";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>EmojiSearch</h1>
          <input
            type="text"
            placeholder="what emoji are you looking for ?"
          ></input>
        </div>
        {data.map((elem, index) => {
          return (
            <p key={index}>
              {elem.symbol} {elem.title}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
