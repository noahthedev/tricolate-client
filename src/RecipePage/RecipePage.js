import React from 'react'
import RECIPES from '../store'

export default class RecipePage extends React.Component {
  render() {
    return (
      <>
      <h1>title</h1>
      <p>coffee</p>
      <p>grind</p>
      <p>water</p>
      <ul>
        <li>
          <h3>Step 1</h3>
          <p>Pour 35g of water, pick up and swirl the brewer. Allow to bloom for 35 seconds.</p>
        </li>
        <li>
          <h3>Step 2</h3>
          <p>Pour remaining water and swirl again. Your total brew should be between 03:00-04:00 minutes.</p>
        </li>
      </ul>
      </>
    )
  }
}