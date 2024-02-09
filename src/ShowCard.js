import {useEffect, useState } from "react";
import StarShow from "./StarShow";

function ShowCard(){
    const [showData, setShowData] = useState([]);
  

    useEffect(() => {
         fetch("http://localhost:3000/showData")
        .then(r => r.json())
        .then(showData => setShowData(showData))
        }, [])


    return (
        <div> 
        <h2>This is the Show Card</h2> 
        <h1>List your favorite shows</h1>
        <ul>
            {showData.map(show => (
                <li key={show.id}>
                    <img src={show.image} alt={show.name} />
                    <h3> Show: {show.name}</h3>
                </li>
            ))}
        </ul>
        </div>
       );
}

export default ShowCard;