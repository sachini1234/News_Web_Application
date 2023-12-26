import { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Newslist = (props) => {
    const { category, searchTerm } = props;

    useEffect(() =>{
        const fetchNews = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=52dd7db6fe134714ab927a24072eb486`;

            if (category) {
                url += `&topic=$(category)`;
            }
            if (searchTerm) {
                url += `&topic=$(searchTerm)`;
            }
            url += `&token=${process.env.REACT_APP_GNEWS}`
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default Newslist;
