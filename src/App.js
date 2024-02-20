
import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
// import Table from './Components/Table';
import React, { useState } from "react";
import { UpdateContext } from './Components/Context';



function App() {
  const [bool, setbool] = useState(false)


  const handleclick = (event) => {
    event.preventDefault();
    console.log("i am clicking")
    setbool(!bool);
    console.log(bool);
  };

  return (
    <>
      <UpdateContext.Provider value={{ handleclick, bool }}>
        <Navbar />
        <SearchBar />
        {/* <Table  /> */}
      </UpdateContext.Provider>

    </>
  );
}

export default App;
