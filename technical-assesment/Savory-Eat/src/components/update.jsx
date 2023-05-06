import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

const Update = ({ data, update }) => {
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

  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          defaultvalue={data.recepie_Name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input
          defaultvalue={data.Cook_Time}
          type="number"
          placeholder="Cooking Time"
          onChange={(e) => setCT(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input
          defaultvalue={data.Prep_Time}
          type="number"
          placeholder="Preparation Time"
          onChange={(e) => setPT(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input
          defaultvalue={data.Serves}
          type="number"
          placeholder="serves"
          onChange={(e) => setServes(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input
          defaultvalue={data.categorie}
          type="text"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          defaultvalue={data.recepie_Description}
          type="text"
          placeholder="Description"
          onChange={(e) => setDes(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input
          defaultvalue={data.Cook_Time}
          placeholder="Ingredients"
          onChange={(e) => setIngredeints(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input
          defaultvalue={data.Cook_Time}
          type="text"
          placeholder="Image URL"
          onChange={(e) => setURL(e.target.value)}
        />
      </div>
      <button
        className="create-recipe-btn"
        onClick={() => {
          update(obj);
        }}
      >
        update
      </button>
      <button></button>
    </div>
  );
};
export default Update;
