import React from 'react'

export default class Recipe extends React.Component {
  render() {
    return (
      <>
      <h2>Tricolate official traditional</h2>
      <p>coffee: 15g</p>
      <p>grind: medium coarse</p>
      <p>water: 250g</p>
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