import React from 'react'
import NavBar from '../NavBar/NavBar'
import RecipeList from '../RecipeList/RecipeList'
import './App.css'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <h1>Brew with Tricolate</h1>
        <RecipeList/>
        <footer>Copyright 2021 Noah Roberts</footer>
      </div>
    )
  }  
}


