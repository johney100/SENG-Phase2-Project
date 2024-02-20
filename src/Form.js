import React, { useState } from "react";

// Component responsible for handling show submission
function Form({addShows}) {
    const [formData, setFormData] = useState({
      image: "",
      name: ""
    });
  
  
    // Function to update the state using the setter function
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.id]: event.target.value,
      });
    }

    // Function to take form data and update the server (db.json in this case) using a POST request
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3000/showData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
         
        })
        .then(r => r.json())
        .then(data => addShows(data))
      }
    
      // Renders the form with inputs and submit button
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add an Image URL"
          id="image"
          value={formData.image}
          onChange={handleChange}
        />
         <input
          type="text"
          placeholder="Show"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input type="submit"/>
      </form>
      
    );
  }

  

    export default Form;