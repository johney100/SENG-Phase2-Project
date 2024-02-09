import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
      id: "",
      image: "",
      name: ""
    });
  
    //since the id values are the same as the keys in formData, we can write an abstract setFormData here
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.id]: event.target.value,
      });
    }
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3000/showData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Show ID"
          id="id"
          value={formData.id}
          onChange={handleChange}
        />
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