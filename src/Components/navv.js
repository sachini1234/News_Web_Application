import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import axios from 'axios';

import Search from "./Search";
import '../Styles/style.css';

const NavBar = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    console.log('Searching for:', searchValue); // Log the search value to the console
    try {
      const response = await axios.get(`http://localhost:3001/home?q=${searchValue}`);
      console.log('Response:', response); // Log the entire response object to the console
  
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error('Error:', error); // Log any errors to the console
    }
  }
  
  
  

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#sports">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#business">Business</NavDropdown.Item>
                <NavDropdown.Item href="#political">Political</NavDropdown.Item>
                <NavDropdown.Item href="#political">Entertainment</NavDropdown.Item>
                <NavDropdown.Item href="#political">Health</NavDropdown.Item>
                <NavDropdown.Item href="#political">Technology</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand>
            <Search searchValue={searchValue} onInputChange={onInputChange} handleSearch={handleSearch} /> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
