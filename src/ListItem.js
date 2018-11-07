import React, { Component } from "react";
import { ListGroupItem, Col, Row, Button, Nav, NavLink } from "reactstrap";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.type === "todo"){
      return (
        <ListGroupItem>
        <Row>
          <Col>
            <Row>
              <p>Title: {this.props.title}</p>
            </Row>
            <Row>
              <p>Completed: {this.props.completed.toString()}</p>
            </Row>
          </Col>
        </Row>
      </ListGroupItem>
    );
    }
    if(this.props.type === "posts"){
      return (
        <ListGroupItem>
          <Row>
            <Col>
              <Row>
                <p>Title: {this.props.title}</p>
              </Row>
              <Row>
                <p>Body: {this.props.body}</p>
              </Row>
            </Col>
          </Row>
        </ListGroupItem>
      );
    }
    else {
      return (
        <ListGroupItem>
          <Row>
            <Col>
              <img src="https://picsum.photos/24/24" />
            </Col>
            <Col>
              <Row>
                <p>Name: {this.props.userName}</p>
              </Row>
              <Row>
                <p>Email: {this.props.email}</p>
              </Row>
            </Col>
            <Col>
              <Row>
                <NavLink href={"/user/" + this.props.userId + "/todos"}>
                  <Button>Todos</Button>
                </NavLink>
              </Row>
              <Row>
                <NavLink href={"/user/" + this.props.userId + "/posts"}>
                  <Button>Posts</Button>
                </NavLink>
              </Row>
            </Col>
          </Row>
        </ListGroupItem>
      );
    }
  }
}