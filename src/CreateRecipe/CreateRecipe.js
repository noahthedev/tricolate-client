import React from 'react'
import './CreateRecipe.css'
import { config } from '../config'
import ApiContext from '../ApiContext'

export default class CreateRecipe extends React.Component {
  static contextType = ApiContext

  handleSubmit = e => {
    e.preventDefault()
    const newRecipe = {
      title: e.target['recipe-title'].value,
      abstract: e.target['recipe-abstract'].value,
      coffee: e.target['recipe-coffee'].value,
      grind: e.target['recipe-grind'].value,
      water: e.target['recipe-water'].value,
      method: e.target['recipe-method'].value,
      link: e.target['recipe-link'].value
    }
    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(response.statusText)
      })
      .then(recipe => {
        this.context.addRecipe(recipe)
        this.props.history.push(`/`)
      })
      .catch(error => console.error(error.message))
  }

  render() {
    return (
      <div>
        <form className='recipe-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title-input'>Title</label>
            <input type='text' id='title-input' name='recipe-title' required/>
          </div>
          <div>
            <label htmlFor='abstract-input'>Description</label>
            <textarea type='text' id='abstract-input' placeholder='Describe your recipe in one sentence.' name='recipe-abstract' required/>
          </div>
          <div>
            <label htmlFor='coffee-input'>Coffee</label>
            <input type='number' id='coffee-input' placeholder='weight in grams' name='recipe-coffee' required/>
          </div>
          <div>
            <label htmlFor='grind-input'>Grind</label>
            <input type='text' id='grind-input' placeholder='e.g. medium fine' name='recipe-grind'/>
          </div>
          <div>
            <label htmlFor='water-input'>Water</label>
            <input type='number' id='water-input' placeholder='weight in grams' name='recipe-water' required/>
          </div>
          <div>
            <label htmlFor='method-input'>Method</label>
            <textarea id='method-input' placeholder='List all steps and process here.' name='recipe-method' required/>
          </div>
          <div>
            <label htmlFor='link-input'>Link</label>
            <input type='url' id='link-input' placeholder='URL' name='recipe-link'/>
          </div>
          <button type='submit'>Add Recipe</button>
        </form>
      </div>
    )
  }
}