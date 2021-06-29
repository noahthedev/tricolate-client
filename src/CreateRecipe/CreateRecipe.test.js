import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CreateRecipe from './CreateRecipe'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <CreateRecipe/>
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})