import React from 'react'
import { Link } from 'react-router-dom'

export default class Recipe extends React.Component {
  render() {
    return (
      <>
        <h2>
          <Link to={`/recipes/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <p>{this.props.abstract}</p>
      </>
    )
  }
}