import './App.css';
import React, { useState, useEffect } from 'react'
import Recipe from './Recipe';

function App() {

  const APP_ID = "" // Edamam recipe API App ID
  const APP_KEY = "" // Edamam recipe API App key
  const [recipes, setRecipes] = useState([])
  const [inputText, setInputText] = useState('')


  const getRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${inputText}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
    } catch (error) {
      console.log("error", error)
    }
  }

  const setTextInSubmit = e => {
    e.preventDefault()
    getRecipes()
  }

  return (

    <div className="App">
      <form className="search-form" onSubmit={setTextInSubmit}>
        <input type="text" placeholder="Search recipes.." className="search-bar" value={inputText} onChange={e => setInputText(e.target.value)}></input>
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
