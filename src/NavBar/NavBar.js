import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
    <nav>
      <Link to='/'>TricoMate</Link>
      <Link to='/createrecipe'>Share Recipe</Link>
    </nav>
    )
  } 
}