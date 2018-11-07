import React, { Component } from 'react'
import Header from './Header';
import ListContainer from './ListContainer';

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
    return (
      <div>
        <Header />
        <ListContainer type="Posts" postsArray={this.state.postsArray}/>
      </div>
    )
  }
}
