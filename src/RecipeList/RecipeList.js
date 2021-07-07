import React from 'react'
import RecipeAbstract from '../RecipeAbstract/RecipeAbstract'
import './RecipeList.css'
import ApiContext from '../ApiContext'

export default class RecipeList extends React.Component {
  static contextType = ApiContext

  render() {
    const { recipes=[] } = this.context
    const recipelist = recipes.map((recipe) => {
      return (
        <RecipeAbstract
          key={recipe.id}
          recipe={recipe}
        />
      )
    })

    return (
      <div className='recipe-list'>
        {recipelist}
      </div>
    )
  }
}