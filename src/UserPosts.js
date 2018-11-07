import React, { Component } from 'react'
import Header from './Header';
import ListContainer from './ListContainer';
import Loader from "react-loader-spinner"
import { Container } from "reactstrap";
export default class UserPosts extends Component {

  constructor(props){
    super(props)
    this.state = {
      postsArray: [{
        id: "",
        title: "",
        body: ""
      }],
      isLoading: true
    }
  }

  componentDidMount(){
    if(this.props.match.params.id){
      fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.match.params.id)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          postsArray: json.map((post) => {
            return { id: post.id, title: post.title, body: post.body }
          })
        })
      })
      .then(() => {this.setState({isLoading: false})})
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((json) => {
        this.setState({
          postsArray: json.map((post) => {
            return { id: post.id, title: post.title, body: post.body }
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
        <ListContainer type="Posts" postsArray={this.state.postsArray}/>
      </React.Fragment>
    )
    }
  }
}
