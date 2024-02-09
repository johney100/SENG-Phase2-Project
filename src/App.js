
import './App.css';
import ShowCard from './ShowCard';
import Home from './Home';
import NavBar from './NavBar';
import AddShow from './AddShow';
import TextBlock from './TextBlock';
import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";





function App() {
  const [page, setPage] = useState("/")

  return (
    <div className="App">
      
      <BrowserRouter>
      <NavBar onChangePage={setPage}/>
      <Routes>
        <Route path="/addshow" element={<AddShow />}/>
        <Route path="/shows" element={<ShowCard />} />
        <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
