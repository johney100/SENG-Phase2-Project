
import './App.css';
import Home from './Home';
import ShowContainer from './ShowContainer';
import Form from './Form';
import NavBar from './NavBar';
import AddShow from './AddShow';
import TextBlock from './TextBlock';
import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";





// Main App component
function App() {

 // State variables for page and show data

  const [page, setPage] = useState("/")
  const [showData, setShowData] = useState([]);   
 
   useEffect(() => {
         fetch("http://localhost:3000/showData")
        .then(r => r.json())
        .then(data => setShowData(data)) // Update showData state with fetched data
        }, []) // Empty dependency array to run only once on mount

  // Function to handle adding new shows 
  function addShows(newShow){
        setShowData([...showData, newShow]) // Add new show to the showData array
         }
    
// define client side routes for navigation
  return (
    <div className="App"> 
      <BrowserRouter> 
      <NavBar onChangePage={setPage}/>
      <Routes>
        <Route path="/addshow" element={<Form addShows={addShows} />}/>
        <Route path="/shows" element={<ShowContainer showData={showData} />} />
        <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
