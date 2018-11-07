import React, { Component } from 'react'
import Header from './Header';
import ListContainer from './ListContainer';
import Loader from "react-loader-spinner";
import { Container } from "reactstrap";

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
        <Container style={{ textAlign: 'center', marginTop: '35%' }}>
          <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
        </Container>
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
