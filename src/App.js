/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import data from './data.js';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';


function App() {

  // data.js에 들어있는 data 가져와서 useState 사용하기
  let [shoes] = useState(data)
  
  
  return (
    <div className="App">
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">web-shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
        {
            shoes.map((shoe, index) => (
                <Card info={shoe} index={index} />
            ))
          }
        </div>
      </div>
      
    </div>
  );
}

function Card(props){
  return(
    <div className='col-md-4'>
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.index + 1) + ".jpg"} width="80%" />
            <h4>{props.info.title}</h4>
            <p>{props.info.content}</p>
            <p>{props.info.price} 원</p>
          </div>
  )
}
export default App;
