import {useEffect, useState } from "react";
import ShowCard from "./ShowCard";

function ShowContainer({showData}){
    
    const mappedShows  = showData.map((show) => (
        <ShowCard key={show.id} image={show.image} name={show.name} />
      ));


       
        console.log(mappedShows);
    return (
        <div> 
        <h2>This is the Show Card</h2> 
        <h1>List your favorite shows</h1>
        <ul>
        {mappedShows}
        </ul>
        
        </div>
       );
}

export default ShowContainer;