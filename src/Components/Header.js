import React from 'react';
import banner from "./assets/daily.png";
import '../Styles/style.css';

function Header() {
  return (
    <div className="container">
        <div className="d-flex justify-content-between">
            <div>
                <h1 className="fw-bold header"><span className="text-warning">DAILY</span>JOURNAL</h1>
            </div>

            <div className="mt-3 banner">
                <img src={banner}  alt="Italian Trulli" />
            </div>
        </div>
    </div>
  );
}

export default Header;
