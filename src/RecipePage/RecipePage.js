import React from 'react'
import './RecipePage.css'
import ApiContext from '../ApiContext'

export default class RecipePage extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext

  findRecipe = (recipes=[], recipeId) =>
  recipes.find(recipe => recipe.id === parseInt(recipeId))

  render() {
    const { recipes=[] } = this.context
    const { recipeId } = this.props.match.params
    const recipe = this.findRecipe(recipes, recipeId) || {}
    return (
      <div className='recipe-whole'>
        <h1>{recipe.title}</h1>
        <p>coffee: {recipe.coffee}g</p>
        <p>grind: {recipe.grind}</p>
        <p>water: {recipe.water}g</p>
        <p>method:<br/>{recipe.method}</p>
        {recipe.link ? <p><a className="link" href={recipe.link}>link</a></p> : ''}
      </div>
    )
  }
}