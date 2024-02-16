import {useEffect, useState } from "react";
import ShowCard from "./ShowCard";

function ShowContainer({showData}){
    


       
        console.log(showData);
    return (
        <div> 
        <h2>This is the Show Card</h2> 
        <h1>List your favorite shows</h1>
            <ShowCard showData={showData}/>
        </div>
       );
}

export default ShowContainer;