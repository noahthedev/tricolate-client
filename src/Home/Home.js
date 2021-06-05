import React from 'react'
import RecipeList from '../RecipeList/RecipeList'
import './Home.css'
import tricolateJpg from '../images/tricolate.jpg'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Brew with Tricolate</h1>
        <div className='img-container'>
          <img src={tricolateJpg} alt='tricolate brewer'/>
        </div>
        <div className='intro'>
        <p>
          The Tricolate is a revolutionary zero-bypass coffee brewer that allows you to experiment with brew ratios far beyond what is acceptable with a traditional pourover brewer (v60, Kalita, etc.)
        </p>
        <p>
          Brew With Tricolate is a website designed to provide you with a place to find successful recipes from coffee professionals and enthusiasts and allow you to share your successful creations.
        </p>
        </div>
        <RecipeList/>
      </div>
    )
  }
}