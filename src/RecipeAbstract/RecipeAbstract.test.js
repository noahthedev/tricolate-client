import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RecipeAbstract from './RecipeAbstract'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <RecipeAbstract/>
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})