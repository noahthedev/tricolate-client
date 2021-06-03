import React from 'react'
import Recipe from '../RecipeAbstract/RecipeAbstract'
import RECIPES from '../recipes'

export default class RecipeList extends React.Component {
  render() {
    const recipes = Object.keys(RECIPES).map((id) => {
      return (
        <Recipe
          key={id}
          id={id}
          name={RECIPES[id].title}
          abstract={RECIPES[id].abstract}
        />
      )
    })

    return (
      <>
        {recipes}
      </>
    )
  }
}