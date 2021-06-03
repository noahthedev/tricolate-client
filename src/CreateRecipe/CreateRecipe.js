import React from 'react'

export default class CreateRecipe extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor='title-input'>Title</label>
            <input type='text' id='title-input' />
          </div>
          <div>
            <label htmlFor='abstract-input'>Description</label>
            <input type='text' id='abstract-input' />
          </div>
          <div>
            <label htmlFor='coffee-input'>Coffee (weight in grams)</label>
            <input type='number' id='coffee-input' />
          </div>
          <div>
            <label htmlFor='grind-input'>Grind</label>
            <input type='text' id='grind-input' />
          </div>
          <div>
            <label htmlFor='water-input'>Water (weight in grams) </label>
            <input type='number' id='water-input' />
          </div>
          <div>
            <label htmlFor='method-input'>Method</label>
            <textarea id='method-input' />
          </div>
          <div>
            <label htmlFor='link-input'>Link (URL)</label>
            <input type='url' id='link-input' />
          </div>
          <button type='submit'>Add recipe</button>
        </form>
      </div>
    )
  }
}