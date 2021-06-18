import React from 'react'
import './RecipePage.css'
import ApiContext from '../ApiContext'

export default class RecipePage extends React.Component {
  static contextType = ApiContext

  render() {
    const { recipeId } = this.props.match.params
    const { recipes=[] } = this.context
    const recipe = recipes[recipeId - 1] 
    return (
      <>
        <h1>{recipe.title}</h1>
        <p>coffee: {recipe.coffee}g</p>
        <p>grind: {recipe.grind}</p>
        <p>water: {recipe.water}g</p>
        <p>method:<br/>{recipe.method}</p>
        {recipe.link ? <p><a className="link" href={recipe.link}>link</a></p> : ''}
      </>
    )
  }
}