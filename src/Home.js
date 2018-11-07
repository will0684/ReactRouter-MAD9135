import React, { Component } from 'react'
import Header from './Header';
import ListContainer from './ListContainer';
import { Container } from "reactstrap";
import spinningcircles from './spinning-circles.svg';

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      userArray: [
        {
          id: '',
          name: ''
        }
      ],
      isLoading: true
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
    .then(() => this.setState({isLoading: false}))
  }

  render() {
    if(this.state.isLoading){
      return(
        <React.Fragment>
          <img src={spinningcircles}></img>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <Header />
        <ListContainer type="Users" userArray={ this.state.userArray } />
      </React.Fragment>
    )
  }
}
