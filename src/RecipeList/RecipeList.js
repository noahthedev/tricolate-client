import React from 'react'
import Recipe from '../Recipe/Recipe'
import RECIPES from '../store'

export default class RecipeList extends React.Component {
  render() {
    const recipes = Object.keys(RECIPES).map((idx) => {
      return (
        <Recipe
          name={RECIPES[idx].title}
          abstract={RECIPES[idx].abstract}
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