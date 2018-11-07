import React, { Component } from 'react'
import { ListGroup, Container } from "reactstrap";
import ListItem from './ListItem';

export default class ListContainer extends Component {
  render(props) {
    if(this.props.type === "Users"){
      return (
        <Container className="pr-0">
          <h5 className="text-center"><u>{this.props.type}</u></h5>
          <ListGroup>
            {
              this.props.userArray.map((user)=>{
                return (<ListItem type="user" key={user.id} userId={user.id} userName={user.name} email={user.email}></ListItem>)
              })
            }
          </ListGroup>
        </Container>
      )
    }
    if(this.props.type === "Todos"){
      return (
        <Container className="pr-0">
          <h5 className="text-center"><u>{this.props.type}</u></h5>
          <ListGroup>
            {
              this.props.todosArray.map((todo)=>{
                return (<ListItem type="todo" key={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed}></ListItem>)
              })
            }
          </ListGroup>
        </Container>
      )
    }
    if(this.props.type === "Posts"){
      return (
        <Container className="pr-0">
          <h5 className="text-center"><u>{this.props.type}</u></h5>
          <ListGroup>
            {
              this.props.postsArray.map((post)=>{
                return (<ListItem type="posts" key={post.id} userId={post.userId} title={post.title} body={post.body}></ListItem>)
              })
            }
          </ListGroup>
        </Container>
      )
    }
  }
}