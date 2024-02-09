import {useEffect, useState } from "react";
import StarShow from "./StarShow";

function ShowCard(){
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
         fetch("http://localhost:3000/showData")
        .then(r => r.json())
        .then (showData => showData.forEach(show => {
            setImage(show.image);
            setName(show.name);
        }))
      
        
    }, [])
    return (
        <div> 
        <h2>This is the Show Card</h2> 
        <h1>Find your favorite shows</h1>
        <img src={image} alt="TV show" />
        <h3>Show Name: {name} </h3>
        <StarShow />
        </div>
       );
}

export default ShowCard;