import React from 'react'
import RecipeAbstract from '../RecipeAbstract/RecipeAbstract'
import RECIPES from '../recipes'
import './RecipeList.css'

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAscending: true
    }
  }

  toggleSort = () => {this.setState({ isAscending: !this.state.isAscending })}

  sortRecipes = (arr) => {
    let sortedRecipes = []

    if (this.state.isAscending === true) {
      sortedRecipes = arr.sort((a, b) => {
        return a.id - b.id
      }) 
    }
    else if (this.state.isAscending === false) {
      sortedRecipes = arr.sort((a, b) => {
        return b.id - a.id
      })
    }
    return sortedRecipes;
  }
  render() {
    const sortedRecipes = this.sortRecipes(RECIPES)
    const recipes = sortedRecipes.map((recipe) => {
      return (
        <RecipeAbstract
          key={recipe.id}
          recipe={recipe}
        />
      )
    })

    return (
      <div className='recipe-list'>
        {/*<button onClick={this.toggleSort}></button>*/}
        {recipes}
      </div>
    )
  }
}