import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
        <div className='navigationbar'>
        <Navbar bg="dark" variant="dark" >
            <Container  style={{display: 'contents', paddingLeft: '40px'}}>
                <a href="/employees" >
                    <Navbar.Brand>Employee Management System</Navbar.Brand>
                  </a>

            </Container>
        </Navbar>
        </div>
    )
  }
}

export default Header
