import React from 'react'
import './CreateRecipe.css'
import { Link } from 'react-router-dom'

export default class CreateRecipe extends React.Component {
  render() {
    return (
      <div>
        <form className='recipe-form'>
          <div>
            <label htmlFor='title-input'>Title</label>
            <input type='text' id='title-input'/>
          </div>
          <div>
            <label htmlFor='abstract-input'>Description</label>
            <textarea type='text' id='abstract-input' placeholder='Describe your recipe in one sentence.' />
          </div>
          <div>
            <label htmlFor='coffee-input'>Coffee</label>
            <input type='number' id='coffee-input' placeholder='weight in grams' />
          </div>
          <div>
            <label htmlFor='grind-input'>Grind</label>
            <input type='text' id='grind-input' placeholder='e.g. medium fine'/>
          </div>
          <div>
            <label htmlFor='water-input'>Water</label>
            <input type='number' id='water-input' placeholder='weight in grams' />
          </div>
          <div>
            <label htmlFor='method-input'>Method</label>
            <textarea id='method-input' placeholder='list all steps and process here'/>
          </div>
          <div>
            <label htmlFor='link-input'>Link</label>
            <input type='url' id='link-input' placeholder='URL'/>
          </div>
          <Link to='/'>
          <button>Add recipe</button>
          </Link>
        </form>
      </div>
    )
  }
}