import React from 'react'
import RecipeAbstract from '../RecipeAbstract/RecipeAbstract'
import './RecipeList.css'
import ApiContext from '../ApiContext'

export default class RecipeList extends React.Component {
  static contextType = ApiContext
  /*state = {
    isAscending: true,
    recipes: []
  }

  componentDidMount() {
   fetch(`${config.API_ENDPOINT}/recipes`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    }) 
    .then(recipes => this.setState({recipes}))
    .catch(error => console.error(error.message))
  }*/   
  
  

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
        {/*<button onClick={this.toggleSort}></button>*/}
        {recipelist}
      </div>
    )
  }
}