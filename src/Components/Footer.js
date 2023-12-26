import React from 'react';
import { Container } from 'react-bootstrap';
import '../Styles/style.css';

const Footer = () => {
  return (
    <div className="bg-black">
        <Container className="mt-5">
            <div className="py-5">
                <h1 className="fw-bold text-start"><span className="text-warning">DAILY</span><span className="text-light">JOURNAL</span></h1>
                <div className="footer text-start d-flex justify-content-between text-light">
                    <div>
                        <h5 className="topic">Services</h5>
                        <div className="d-flex flex-column mt-3">
                            <a href="" className="text-light">E-Paper</a>
                            <a href="" className="text-light">Home delivery</a>
                            <a href="" className="text-light">Advertise with us</a>
                            <a href="" className="text-light">feedback</a>
                        </div>
                    </div>

                    <div>
                        <h5 className="topic">E-PAPERS</h5>
                        <div className="d-flex flex-column mt-3">
                            <a href="" className="text-light">ABC News</a>
                            <a href="" className="text-light">Google News</a>
                            <a href="" className="text-light">Globo</a>
                            <a href="" className="text-light">Die Zeit</a>
                            <a href="" className="text-light">InfoMoney</a>
                            <a href="" className="text-light">BBC News</a>
                            <a href="" className="text-light">Les Echos</a>
                            <a href="" className="text-light">The Washington Times</a>
                        </div>
                    </div>

                    <div>
                        <h5 className="topic">NEWS</h5>
                        <div className="d-flex flex-column mt-3">
                            <a href="" className="text-light">Home Page</a>
                            <a href="" className="text-light">Sports</a>
                            <a href="" className="text-light">Business</a>
                            <a href="" className="text-light">Health</a>
                            <a href="" className="text-light">Science</a>
                            <a href="" className="text-light">Entertainment</a>
                            <a href="" className="text-light">Technology</a>
                        </div>
                    </div>

                    <div>
                        <h5 className="topic">CONTACT US</h5>
                        <div className="d-flex flex-column mt-3">
                            <p className="mb-0 fw-bold">Editorial :</p>
                            <a href="" className="mb-2 text-light">+94 0115 435290</a>

                            <p className="mb-0 fw-bold">Technical :</p>
                            <a href="" className="text-light">+94 011 039 1430</a>
                            <a href="" className="text-light">helpdesk@wijeya.lk</a>
                            <a href="" className="mb-2 text-light">dailyjournal@gmail.lk</a>

                            <p className="mb-0 fw-bold">Web Advertising Inquiry :</p>
                            <a href="" className="text-light">+94 0114 199509</a>
                            <a href="" className="text-light">+94 0114 069621</a>
                            <a href="" className="text-light">+94 76 402 3060 - Senali</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer
