/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import data from './data.js';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './pages/detail.js';



function App() {

  // data.js에 들어있는 data 가져와서 useState 사용하기
  let [shoes, setShoes] = useState(data)
  // useNavigate 사용하기
  let navigate = useNavigate()

  // 이름순으로 정렬하는 함수
  const sortShoes = () => {
    let sortedShoes = [...shoes].sort((a, b) => a.title.localeCompare(b.title));
    setShoes(sortedShoes);
  };



  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">web-shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>



      {/* 리액트 라우터 */}
      <Routes>
        <Route path="/" element={
          <div className='container'>
            {/* 정렬 버튼 추가 */}
            <button onClick={sortShoes}>이름순 정렬</button>
            <div className='row'>
              {
                shoes.map((shoe, index) => (
                  <Card info={shoe} index={index} />
                ))
              }
            </div>
          </div>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path='one' element={<h4>첫 주문시 양배추즙 서비스</h4>} />
          <Route path='two' element={<h4>생일기념 쿠폰받기</h4>} />
          <Route></Route>
        </Route>
        <Route path='*' element={<div>404 error</div>} />
      </Routes>


    </div>
  );
}

function About() {
  return (
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  let navigate = useNavigate();

  return (
    <div
      className='col-md-4'
      // 클릭 시 해당 ID의 상세 페이지로 이동
      onClick={() => navigate('/detail/' + props.info.id)}>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (props.info.id + 1) + ".jpg"}
        width="80%"
        alt={props.info.title}
      />
      <h4>{props.info.title}</h4>
      <p>{props.info.content}</p>
      <p>{props.info.price} 원</p>
    </div>
  )
}
export default App;
