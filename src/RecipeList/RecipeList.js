import React from 'react'
import RecipeAbstract from '../RecipeAbstract/RecipeAbstract'
//import RECIPES from '../recipes'
import './RecipeList.css'
import { config } from '../config'

export default class RecipeList extends React.Component {
  state = {
    isAscending: true,
    recipes: []
  }

  componentDidMount() {
   fetch(`${config.API_ENDPOINT}/recipes`)
    .then(response => response.json())  
    .then(recipes =>
      this.setState({recipes}))
  }
  

  /*toggleSort = () => {this.setState({ isAscending: !this.state.isAscending })}

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
  }*/

  render() {
    /*const sortedRecipes = this.sortRecipes(RECIPES)*/
    const recipes = this.state.recipes.map((recipe) => {
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