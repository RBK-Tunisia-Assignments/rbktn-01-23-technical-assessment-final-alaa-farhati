import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const Add = ({ changeView }) => {
  const [name, setName] = useState("");
  const [CT, setCT] = useState("");
  const [PT, setPT] = useState("");
  const [serves, setServes] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDes] = useState("");
  const [Ingredients, setIngredeints] = useState("");
  const [url, setURL] = useState("");

  const obj = {
    Cook_Time: CT,
    Prep_Time: PT,
    recepie_Name: name,
    Serves: serves,
    categorie: category,
    recepie_Image: url,
    recepie_Description: desc,
    recepie_Ingredients: Ingredients,
    users_user_Id: 1,
  };

  const add = () => {
    axios
      .post("http://localhost:4000/api/AllRecepies", obj)
      .then((res) => {
        console.log(obj);
      })
      .catch((err) => {
        console.log(err);
      });
    changeView("Allrecepies");
  };

  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input
          type="number"
          placeholder="Cooking Time"
          onChange={(e) => setCT(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input
          type="number"
          placeholder="Preparation Time"
          onChange={(e) => setPT(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input
          type="number"
          placeholder="serves"
          onChange={(e) => setServes(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDes(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input
          placeholder="Ingredients"
          onChange={(e) => setIngredeints(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input
          type="text"
          placeholder="Image URL"
          onChange={(e) => setURL(e.target.value)}
        />
      </div>
      <button
        className="create-recipe-btn"
        onClick={() => {
          add();
        }}
      >
        Create Recipe
      </button>
    </div>
  );
};
export default Add;
