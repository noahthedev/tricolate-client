import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeAbstract.css'

export default class RecipeAbstract extends React.Component {
  render() {
    return (
      <Link to={`/recipes/${this.props.recipe.id}`}>
        <div className="recipe">
          <h2>{this.props.recipe.title}</h2>
          <p>{this.props.recipe.abstract}</p>
        </div>
      </Link>
    )
  }
}