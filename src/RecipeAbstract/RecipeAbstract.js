import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeAbstract.css'

export default class Recipe extends React.Component {
  render() {
    return (
      <Link to={`/recipes/${this.props.id}`}>
        <div className="recipe">
          <h2>{this.props.name}</h2>
          <p>{this.props.abstract}</p>
        </div>
      </Link>
    )
  }
}