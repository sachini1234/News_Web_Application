import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../Styles/style.css';

const Search = ({handleSearch, searchValue,onInputChange}) => {
  return (
    <div className="searchForm">
        <Form inline onSubmit={handleSearch}>
            <Row className="search-box">
                <Col xs="auto d-flex">
                    <Form.Control type="search" placeholder="Search here..." className=" mr-sm-2" name="search" value={searchValue} onChange={onInputChange} /> 
                    <i class="search fa-solid fa-magnifying-glass pt-2"></i>
                </Col>
                <Col xs="auto">
                  <Button type="submit" variant="warning">Search</Button>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default Search;
