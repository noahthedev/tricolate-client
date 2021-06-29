import React from 'react'
import { Link } from 'react-router-dom'
import './RecipeAbstract.css'

export default class RecipeAbstract extends React.Component {
  static defaultProps = {
    recipe: {}
  }
  render() {
    return (
      
        <div className='recipe'>
        <Link to={`/recipes/${this.props.recipe.id}`}>
          <h2>{this.props.recipe.title}</h2>
          <p>{this.props.recipe.abstract}</p>
          </Link>  
        </div>
      
    )
  }
}