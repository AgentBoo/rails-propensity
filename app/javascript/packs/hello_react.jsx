// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Contact Jane Doe', description: 'Initial interview', label: '30 mins'},
      ]
    },
    {
      id: 'lane2',
      title: 'In Progress',
      label: '0/0',
      cards: []
    },
    {
      id: 'lane3',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

class App extends React.Component{
  render(){
    return(
      <Board data={data} style={{background: '#fff'}} editable draggable />
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('react'),
  )
})
