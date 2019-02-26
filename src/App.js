import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery'
import {Container, Col, Row} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
        <Container fluid={true}>
        <Row><header className="App-header" /></Row>
        <Row className="App-body">
          <Col md={{span: 6, offset: 3}} ><Gallery /></Col>
        </Row>
        </Container>
    );
  }
}

export default App;
