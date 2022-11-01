import "./styles.css";
import Menu from "./Menu";
import Recipes from "./Recipes";
import React, { useState } from "react";

export default function App() {
  const [searchKey, setSearchKey] = useState(null);
  const [inputKey, setInputSearch] = useState(null);

  return (
    <div className="App">
      <Menu />
      <div>
        <div className="line"></div>
        <h4>Filter Recipes</h4>

        <div className="input-recipe">
          <input
            onChange={(val) => {
              setInputSearch(val);
              console.log(val);
            }}
            value={inputKey}
            placeholder="Type your Recipe"
          />{" "}
          <br />
          <button onKeyPress={setSearchKey(inputKey)}>Search...</button>
        </div>
        <div className="line"></div>
      </div>
      <div>
        <Recipes keySearch={searchKey} />
      </div>
    </div>
  );
}
