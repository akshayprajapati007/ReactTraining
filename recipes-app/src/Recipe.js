import React from 'react'
import style from './recipe.module.css'

const Recipe = ({ image, title, calories, ingredients }) => {
    return (
        <div className={style.recipe}>
            <img src={image} className={style.image}></img>
            <h2 className={style.title}>{title}</h2>
            <h4>Calories : {calories.toFixed(2)}</h4>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe
