import React from 'react'
import Recipe from '../Recipe/Recipe'
import RECIPES from '../store'

export default class RecipeList extends React.Component {
  render() {
    const recipes = Object.keys(RECIPES).map((name, idx) => {
      return (
        <Recipe
          name={name}
          recipes={RECIPES}

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