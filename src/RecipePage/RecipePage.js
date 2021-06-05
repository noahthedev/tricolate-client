import React from 'react'
import RECIPES from '../recipes'
import './RecipePage.css'

export default class RecipePage extends React.Component {
  render() {
    const { recipeId } = this.props.match.params
    const recipe = RECIPES[recipeId - 1] 
    return (
      <>
        <h1>{recipe.title}</h1>
        <p>coffee: {recipe.coffee}g</p>
        <p>grind: {recipe.grind}</p>
        <p>water: {recipe.water}g</p>
        <p>method:<br/>{recipe.method}</p>
        {recipe.link ?? <p><a className="link" href={recipe.link}>link</a></p>}
      </>
    )
  }
}