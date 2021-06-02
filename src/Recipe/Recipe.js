import React from 'react'

export default class Recipe extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <p>{this.props.recipes[this.props.name].abstract}</p>
      </>
    )
  }
}