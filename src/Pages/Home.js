import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Category from "../Components/Category";
import '../Styles/style.css';

const Home = (props) => {

  const {category, setCategory, searchTerm, setSearchTerm} = props;
  const [mynews , setMyNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState(8);
  const [showSportsNews, setShowSportsNews] = useState(false);
  const [showBusinessNews, setShowBusinessNews] = useState(false);
  const [showScienceNews, setShowScienceNews] = useState(false);
  const [showEntertainmentNews, setShowEntertainmentNews] = useState(false);

  const truncateDescription = (text, limit) => {
    if (text === null || text === undefined) {
      return '';
    }
  
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '...' : text;
  };  

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  
  

  const fetchSportsNews = async () => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=52dd7db6fe134714ab927a24072eb486`);
    let data = await response.json();
    setMyNews(data.articles);
  };

  const fetchBusinessNews = async () => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=52dd7db6fe134714ab927a24072eb486`);
    let data = await response.json();
    setMyNews(data.articles);
  };

  const fetchScienceNews = async () => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=52dd7db6fe134714ab927a24072eb486`);
    let data = await response.json();
    setMyNews(data.articles);
  };

  const fetchEntertainmentNews = async () => {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=52dd7db6fe134714ab927a24072eb486`);
    let data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=52dd7db6fe134714ab927a24072eb486`);
      let data = await response.json();
      setMyNews(data.articles.slice(0, visibleNews));  // Use slice to get only the visible news
    }

    if (showSportsNews) {
      fetchSportsNews();
    } else if (showBusinessNews) {
      fetchBusinessNews();
    } if (showScienceNews) {
      fetchScienceNews();
    } else if (showEntertainmentNews) {
      fetchEntertainmentNews();
    } else {
      fetchData();
    }
  }, [category, searchTerm, showSportsNews, showBusinessNews, showScienceNews, showEntertainmentNews, visibleNews]);

  const loadMore = () => {
    setVisibleNews(visibleNews + 4);
  };

  return (
    <Container> 
      <Row>
        <Col xs={12} md={3} className="popular">
          <h5 className="mb-4 text-start">Popular Categories</h5>
          
          <h6 onClick={() => setShowBusinessNews(true)}>Business</h6>
          <a href="https://www.foxbusiness.com/politics/graham-threatens-war-new-yorks-new-bill-that-would-require-chick-fil-a-open-sundays">
            <Card className="bg-dark text-white">
              <Card.Img src="https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/01/0/0/Lindsey-Graham.jpg?ve=1&tl=1" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title className="title" style={{ textShadow: '6px 6px 20px rgba(0, 0, 0, 1)' }}>Graham threatens 'war' over New York's new bill that would require Chick-fil-A to be open on Sundays - Fox Business</Card.Title>
                <Card.Text className="date" style={{ textShadow: '6px 6px 20px rgba(0, 0, 0, 1)' }}>December 24, 2023</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </a>

          <h6 onClick={() => setShowScienceNews(true)}>Science</h6>
          <a href="https://mashable.com/article/nasa-mars-perseverance-water">
            <Card className="bg-dark text-white">
              <Card.Img src="https://helios-i.mashable.com/imagery/articles/07IUVOE0ihJkUrBP93DtAv0/hero-image.fill.size_1248x702.v1703170064.jpg" />
              <Card.ImgOverlay>
                <Card.Title className="title" style={{ textShadow: '6px 6px 20px rgba(0, 0, 0, 1)' }}>NASA's car-sized rover spots strong evidence of gushing water on Mars - Mashable Mark Kaufman</Card.Title>
                <Card.Text className="date" style={{ textShadow: '6px 6px 20px rgba(0, 0, 0, 1)' }}>December 24, 2023</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </a>

          <h6 onClick={() => setShowEntertainmentNews(true)}>Entertainment</h6>
          <a href="https://www.newsnationnow.com/crime/gypsy-rose-blanchard-timeline-prison-release/">
            <Card className="bg-dark text-white">
              <Card.Img src="https://www.newsnationnow.com/wp-content/uploads/sites/108/2023/09/Gypsy-Blanchard.png?w=1280" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title className="title" style={{ textShadow: '6px 6px 20px rgba(0, 0, 0, 1)' }}>Gypsy Rose Blanchard timeline details case ahead of prison release - NewsNation Now</Card.Title>
                <Card.Text className="date" style={{ textShadow: '6px 6px 20px rgba(0, 0, 0, 1)' }}>December 24, 2023</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </a>

          <h5 className="mb-4 text-start">Popular News</h5>
          <a href="https://www.cnn.com/2023/12/14/europe/alex-batty-british-boy-missing-found-france-intl/index.html">           
              <Card.Body className="text-start border-top border-2 py-3">
                <div className="popular_news d-flex justify-content-between align-items-center">
                  <div className="pop_news">
                    <Card.Img style={{ height: "5rem", width: "5.5rem" }} variant="top" src="https://media.cnn.com/api/v1/images/stellar/prod/231214162840-alex-batty-file.jpg?c=16x9&q=w_800,c_fill" />
                  </div> 
                  <div className="desc ps-3">
                    <Card.Title className="fs-6 text-dark">British boy missing for six years found in France - CNN</Card.Title>
                    <Card.Text className="date mt-2 text-secondary">{formatDate(mynews[0]?.publishedAt)}</Card.Text>
                  </div>                   
                </div>               
              </Card.Body>                   
          </a>

          <a href="https://www.usatoday.com/story/news/politics/2023/12/15/house-gop-projects-confidence-joe-biden-impeachment-inquiry/71923964007/">           
              <Card.Body className="text-start border-top border-2 py-3">
                <div className="popular_news d-flex justify-content-between align-items-center">
                  <div className="pop_news">
                    <Card.Img style={{ height: "5rem", width: "5.5rem" }} variant="top" src="https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/14/USAT/71924017007-xxx-img-afp-1845875925-1-1-3-o-148-takl.JPG?crop=8255,4644,x0,y275&width=3200&height=1801&format=pjpg&auto=webp" />
                  </div> 
                  <div className="desc ps-3">
                    <Card.Title className="fs-6 text-dark">Republicans authorize Joe Biden impeachment inquiry. What's next? - USA TODAY</Card.Title>
                    <Card.Text className="date mt-2 text-secondary">{formatDate(mynews[0]?.publishedAt)}</Card.Text>
                  </div>                   
                </div>               
              </Card.Body>                   
          </a>

          <a href= "https://www.engadget.com/naughty-dog-cancels-development-on-the-last-of-us-online-055333989.html">           
              <Card.Body className="text-start border-top border-2 py-3">
                <div className="popular_news d-flex justify-content-between align-items-center">
                  <div className="pop_news">
                    <Card.Img style={{ height: "5rem", width: "5.5rem" }} variant="top" src= "https://s.yimg.com/ny/api/res/1.2/T8QDn9I8.Bmci.dWdflCUA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/44f33cb0-9b04-11ee-bede-a12b1953081c" />
                  </div> 
                  <div className="desc ps-3">
                    <Card.Title className="fs-6 text-dark">Naughty Dog cancels development on The Last of Us Online - Engadget</Card.Title>
                    <Card.Text className="date mt-2 text-secondary">{formatDate(mynews[0]?.publishedAt)}</Card.Text>
                  </div>                   
                </div>               
              </Card.Body>                   
          </a>

          <h5 className="text-start">Categories</h5>
          <Category setCategory={setCategory} category={category} /> 
        </Col>

        <Col xs={12} md={9}>
          <h5 className="mb-4 text-start ms-4">All News</h5>
          <div className="main d-flex flex-wrap justify-content-between news-cont mt-5 ms-4">
            {
              mynews.map((ele, index) => {
                console.log(ele)
                return (
                  <>   
                    <Card className="text-start" key={index}>
                      
                      <Card.Body> 
                        <Card.Title className="title fw-bold mb-0">{ele.title == null ? "Argentina announces a 50% devaluation of its currency as part of shock economic measures - CBS News" :ele.title}</Card.Title>
                        <Card.Text className="author mb-0"><span>Author - </span>{ele.author == null ? "Bernie Zilio" :ele.author}</Card.Text>
                        <Card.Text className="date text-secondary">{formatDate(ele.publishedAt)}</Card.Text>                
                        <div className="d-flex justify-content-between">
                          <div className="image">
                            <Card.Img style={{ height: "7rem" }} variant="top" src={ele.urlToImage == null ? "https://nypost.com/wp-content/uploads/sites/2/2023/12/Untitled-1-7-1.jpg?quality=75&strip=all&w=1024" :ele.urlToImage} />
                          </div>                   
                          <div className="description">
                            <Card.Text className="descri ps-3">{truncateDescription(ele.description == null ? "A longtime Massachusetts doctor has been sued by a former patient who alleges in a newly filed lawsuit that he..." :ele.description, 20)}</Card.Text>
                          </div>                    
                        </div> 
                        <a href={ele.url} target="_blank" className="mt-3 btn btn-warning">Read more</a>                
                      </Card.Body>

                    </Card>      
                  </>
                )
              })
            }  
          </div>

          <Button variant="warning" onClick={loadMore} className="mt-3">Load More</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;