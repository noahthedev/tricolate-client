import React from 'react'
import RecipeList from '../RecipeList/RecipeList'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Brew with Tricolate</h1>
        <p className="intro">
          This is about the Tricolate and this site
        </p>
        <RecipeList/>
      </>
    )
  }
}