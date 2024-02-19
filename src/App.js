
import './App.css';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import Table from './Components/Table';
import React,{useState} from "react";



function App() {
  const [bool, setbool] = useState(false)

  const handleclick=()=>{
    console.log("i am clicking")
    setbool(!bool);
    console.log(bool);
  };

  return (
    <>
    
    <Navbar handleClick={handleclick} />
    <SearchBar/>
            <Table bool={bool} />  
    
    </>
  );
}

export default App;
