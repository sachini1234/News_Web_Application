import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Row, Col, Button } from 'react-bootstrap';
import '../Styles/style.css';

const NavBar = ({setCategory, setSearchTerm, category}) => {

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

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
                <NavDropdown.Item onClick={()=>handleCategoryClick("sports")}>Sports</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>handleCategoryClick("business")}>Business</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>handleCategoryClick("science")}>Science</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>handleCategoryClick("entertainment")}>Entertainment</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>handleCategoryClick("health")}>Health</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>handleCategoryClick("technology")}>Technology</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand>
            <Form inline onSubmit={handleSearch}>
              <Row className="search-box">
                <Col xs="auto d-flex">
                    <Form.Control type="text" placeholder="Search here..." className=" mr-sm-2" name="search" /> 
                    <i class="search fa-solid fa-magnifying-glass pt-2"></i>
                </Col>
                <Col xs="auto">
                  <Button type="submit" variant="warning">Search</Button>
                </Col>
              </Row>
            </Form>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar;
