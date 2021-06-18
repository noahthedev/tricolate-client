import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import CreateRecipe from '../CreateRecipe/CreateRecipe'
import RecipePage from '../RecipePage/RecipePage'
import { Route } from 'react-router-dom'
import './App.css'
import { config } from '../config'
import ApiContext from '../ApiContext'

export default class App extends React.Component {
  state = {
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
   }
  

  render() {
    const value = {
      recipes: this.state.recipes
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <div className="content-wrap">
            <NavBar/>
            <Route exact path="/" component={Home}/>
            <Route path="/createrecipe" component={CreateRecipe} />
            <Route path="/recipes/:recipeId" component ={RecipePage}/>
            <footer>Copyright 2021 Noah Roberts</footer>
          </div>
        </div>
      </ApiContext.Provider>
    )
  }  
}


