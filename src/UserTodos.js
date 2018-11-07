import React, { Component } from 'react'
import Header from './Header';
import { Container } from "reactstrap";
import ListContainer from './ListContainer';
import spinningcircles from "./spinning-circles.svg"

export default class UserTodos extends Component {

  constructor(props){
    super(props)
    this.state = {
      todosArray: [{
        id: "",
        title: "",
        completed: ""
      }],
      isLoading: true
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos?userId=' + this.props.match.params.id)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        todosArray: json.map((todo) => {
          return { id: todo.id, title: todo.title, completed: todo.completed }
        })
      })
    })
    .then(() => {this.setState({isLoading: false})})
  }

  render() {
    if(this.state.isLoading){
      return(
        <React.Fragment>
          <img src={spinningcircles}></img>
        </React.Fragment>
      )
    } else {
      return (
        <Container className="pr-0">
          <Header />
          <ListContainer type="Todos" todosArray={this.state.todosArray} />
        </Container>
      )
    }
  }
}
