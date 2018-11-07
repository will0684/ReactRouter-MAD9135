import React, { Component } from 'react'
import Header from './Header';
import ListContainer from './ListContainer';

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      userArray: [
        {
          id: '',
          name: ''
        }
      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((json) => {
      this.setState({
        userArray: json.map((user) => {
          return { id: user.id, name: user.name, email: user.email }
        })
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <ListContainer type="Users" userArray={ this.state.userArray } />
      </div>
    )
  }
}
