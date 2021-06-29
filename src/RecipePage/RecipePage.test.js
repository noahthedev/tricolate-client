import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RecipePage from './RecipePage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <RecipePage/>
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})