import React from 'react'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import CreateRecipe from '../CreateRecipe/CreateRecipe'
import RecipePage from '../RecipePage/RecipePage'
import { Route } from 'react-router-dom'
import './App.css'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route path="/createrecipe" component={CreateRecipe} />
        <Route path="/recipes/:recipeId" component ={RecipePage}/>
        <footer>Copyright 2021 Noah Roberts</footer>
      </div>
    )
  }  
}


