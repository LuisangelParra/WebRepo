import { useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-screen text-center mt-10 mb-10">
      <h1 className="font-primaryBold text-5xl text-primary">REPOSITORIO UNINORTE</h1>
      </div>
      <SearchBar />
      
      <div className="container">
        <List />
      </div>
    </div>
  );
}

export default App;
