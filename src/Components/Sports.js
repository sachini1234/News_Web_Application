// src/components/News.js
import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Sports = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const apiKey = 'YOUR_NEWS_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setNews(data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {news.map((article, index) => (
          <Col key={index} md={4}>
            <Card style={{ margin: '10px' }}>
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Sports;
