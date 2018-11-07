import React, { Component } from 'react'
import { Container } from "reactstrap";
import Header from './Header';
import ListContainer from './ListContainer';
import spinningcircles from "./spinning-circles.svg"

export default class UserPosts extends Component {

  constructor(props){
    super(props)
    this.state = {
      postsArray: [{
        id: "",
        title: "",
        body: ""
      }]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.match.params.id)
    .then(response => response.json())
    .then((json) => {
      this.setState({
        postsArray: json.map((post) => {
          return { id: post.id, title: post.title, body: post.body }
        })
      })
    })
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
        <ListContainer type="Posts" postsArray={this.state.postsArray}/>
      </Container>
    )
    }
  }
}
