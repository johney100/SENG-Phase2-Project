

function ShowCard({image}, {name}){

    return(
    <div>
   
   
            <li>
                <img src={image} alt={name} />
                <h3> Show: {name}</h3>
            </li>
    </div>
    );
}

export default ShowCard;