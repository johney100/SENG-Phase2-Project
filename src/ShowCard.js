import {useEffect, useState } from "react";
import StarShow from "./StarShow";

function ShowCard(){
    const [image, setImage] = useState(null);

    useEffect(() => {
         fetch("http://localhost:3000/showData")
        .then(r => r.json())
        .then (showData => showData.forEach(show => setImage(show.image)))
        
    }, [])
    return (
        <div> 
        <p>This is the Show Card</p> 
        <h1>Find your favorite shows</h1>
        <img src={image} alt="TV show" />
        <StarShow />
        </div>
       );
}

export default ShowCard;