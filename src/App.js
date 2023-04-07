import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function addNumbers1(x, y) {
  console.log(x, y);
  return x + y;
}

const addNumbers2 = (x, y) => x + y;

const addNumbers3 = (x, y) => {
  console.log(x, y);
  return x + y;
};

const getpokemon = async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  console.log(response.data);
  return response;
};

const App = () => {
  const imageurl = "https://s7d2.scene7.com/is/image/TWCNews/rain_showers_jpg";
  const thulasiage = 10;
  const anujanage = 15;
  const lathanage = 25;
  const average = (thulasiage + anujanage + lathanage) / 3;
  const rounded = Math.round(average);
  getpokemon();
  console.log("I was here.");

  // console.log(pokemon.results[73].name);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Anujan's Website V2</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={imageurl} alt="rain" />

        <p>This is all about Anujan</p>
        <p>
          {/* {pokemon.results.map(p => {
            return p.name + ", ";
          })} */}
        </p>
        <a
          className="App-link Button"
          href="https://rainymood.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click for some ASMR
        </a>
        <a
          className="App-link Button"
          href="https://justflipacoin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do A Flip
        </a>
      </header>
    </div>
  );
};

export default App;
