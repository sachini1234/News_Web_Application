import React from 'react';
import { Nav } from 'react-bootstrap';
import '../Styles/style.css';

const Category = ({setCategory, category}) => {

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

  return (
    <Nav className="flex-column">
        <Nav.Link onClick={()=>handleCategoryClick("sports")} className={`link text-secondary-emphasis nav-link-hover-effect ${category === "sports" ? "active" : ""}`}>Sports</Nav.Link>
        <Nav.Link onClick={()=>handleCategoryClick("business")} className={`link text-secondary-emphasis nav-link-hover-effect ${category === "business" ? "active" : ""}`}>Business</Nav.Link>
        <Nav.Link onClick={()=>handleCategoryClick("science")} className={`link text-secondary-emphasis nav-link-hover-effect ${category === "science" ? "active" : ""}`}>Science</Nav.Link>
        <Nav.Link onClick={()=>handleCategoryClick("entertainment")} className={`link text-secondary-emphasis nav-link-hover-effect ${category === "entertainment" ? "active" : ""}`}>Entertainment</Nav.Link>
        <Nav.Link onClick={()=>handleCategoryClick("health")} className={`link text-secondary-emphasis nav-link-hover-effect ${category === "health" ? "active" : ""}`}>Health</Nav.Link>
        <Nav.Link onClick={()=>handleCategoryClick("technology")} className={`link text-secondary-emphasis nav-link-hover-effect ${category === "technology" ? "active" : ""}`}>Technology</Nav.Link>
    </Nav>
  )
}

export default Category;
