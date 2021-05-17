import './App.css';
import React,{useState, useEffect} from 'react'
import Recipe from './Recipe';

function App() {

  const APP_ID = '16d5e01b'
  const APP_KEY = '53dfc4a89a6ec4f2d3bda3da32651051'
  const [recipes, setRecipes] = useState([])
  const [inputText, setInputText] = useState('')
  const [searchText, setSearchText] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [searchText])


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const setTextInSubmit = e => {
    e.preventDefault()
    setSearchText(inputText)
    setInputText('')
  }

  return (

    <div className="App">
      <form className="search-form" onSubmit={setTextInSubmit}>
        <input type="text" placeholder="Search recipes.." className="search-bar" value={inputText} onChange={e => setInputText(e.target.value)}></input>
        <button className="search-button">Search</button>
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
