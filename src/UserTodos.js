import React, { Component } from 'react'
import Header from './Header';
import ListContainer from './ListContainer';

export default class UserTodos extends Component {

  constructor(props){
    super(props)
    this.state = {
      todosArray: [{
        id: "",
        title: "",
        completed: ""
      }]
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
  }

  render() {
    return (
      <div>
        <Header />
        <ListContainer type="Todos" todosArray={this.state.todosArray} />
      </div>
    )
  }
}
