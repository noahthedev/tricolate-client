import React from 'react'
import RecipeAbstract from '../RecipeAbstract/RecipeAbstract'
import RECIPES from '../recipes'

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortOrder: 'ascending'
    }
  }

  toggleSort = () => {
    if (this.state.sortOrder === 'ascending') {
      this.setState({
        sortOrder: 'descending'
      })
    }
    else if (this.state.sortOrder === 'descending') {
      this.setState({
        sortOrder: 'ascending'
      })
    }
  }

  sortRecipes = (arr) => {
    let sortedRecipes = []

    if (this.state.sortOrder === 'ascending') {
      sortedRecipes = arr.sort((a, b) => {
        return a.id - b.id
      }) 
    }
    else if (this.state.sortOrder === 'descending') {
      sortedRecipes = arr.sort((a, b) => {
        return b.id - a.id
      })
    }
    return sortedRecipes;
  }
  render() {
    const sortedRecipes = this.sortRecipes(RECIPES)
    console.log(sortedRecipes);
    const recipes = sortedRecipes.map((recipe) => {
      return (
        <RecipeAbstract
          key={recipe.id}
          recipe={recipe}
        />
      )
    })

    return (
      <>
        <button onClick={this.toggleSort}></button>
        {recipes}
      </>
    )
  }
}