import React from 'react'
import RECIPES from '../store'

export default class RecipePage extends React.Component {
  render() {
    const { recipeId } = this.props.match.params
    const recipe = RECIPES[recipeId] 
    return (
      <>
        <h1>{recipe.title}</h1>
        <p>coffee: {recipe.coffee}g</p>
        <p>grind: {recipe.grind}</p>
        <p>water: {recipe.water}g</p>
        <p>method:<br/>{recipe.method}</p>
      </>
    )
  }
}