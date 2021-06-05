import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends React.Component {
  render() {
    return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/createrecipe'>Share Recipe</Link></li>
      </ul>
    </nav>
    )
  } 
}