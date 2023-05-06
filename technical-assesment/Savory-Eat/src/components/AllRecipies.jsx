import React, { useEffect, useState } from "react";
import axios from "axios";
import "../index.scss";
import Update from "./update";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [updateRecipe, setUpdateRecipe] = useState(null);

  const fetch = () => {
    axios
      .get("http://localhost:4000/api/AllRecepies")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const handleDelete = (i) => {
    axios
      .delete(`http://localhost:4000/api/Recepie/${i}`)
      .then(() => {
        fetch();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdate = (recipe) => {
    axios
      .put(`http://localhost:4000/api/Recepie/${recipe.recepie_Id}`, recipe)
      .then(() => {
        fetch();
        setUpdateRecipe(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateClick = (recipe) => {
    setUpdateRecipe(recipe);
  };

  return (
    <div className="card-container">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.recepie_Id}>
          <button
            className="delete"
            onClick={() => handleDelete(recipe.recepie_Id)}
          >
            Delete
          </button>
          <button className="update" onClick={() => handleUpdateClick(recipe)}>
            Update
          </button>
          <div className="header">
            <img className="img" src={recipe.recepie_Image} alt="food" />
          </div>
          <div className="text">
            <h1 className="food">{recipe.recepie_Name}</h1>
            <i>time to cook {recipe.Cook_Time}</i> <br />
            <i>time to serve {recipe.Serves}</i>
          </div>
        </div>
      ))}

      {updateRecipe && <Update data={updateRecipe} update={handleUpdate} />}
    </div>
  );
};

export default AllRecipes;
