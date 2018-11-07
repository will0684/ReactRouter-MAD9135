import React, { Component } from 'react'
import Header from './Header';
import ListContainer from './ListContainer';
import Loader from "react-loader-spinner"
import { Container } from "reactstrap";

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
    if(this.props.match.params.id){
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
    } else {
      fetch('https://jsonplaceholder.typicode.com/todos')
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
  }

  render() {
    if(this.state.isLoading){
      return(
        <Container style={{ textAlign: 'center', marginTop: '35%' }}>
          <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
        </Container>
      )
    } else {
      return (
        <React.Fragment>
          <Header />
          <ListContainer type="Todos" todosArray={this.state.todosArray} />
        </React.Fragment>
      )
    }
  }
}
