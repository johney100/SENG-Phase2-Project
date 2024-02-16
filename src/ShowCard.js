

function ShowCard({showData}){

    return(
    
    <ul>
        {showData.map(show => (
            <li key={show.id}>
                <img src={show.image} alt={show.name} />
                <h3> Show: {show.name}</h3>
            </li>
        ))}
    </ul>
   
    );
}

export default ShowCard;