import React from 'react';

function Topbar() {
  return (
    <div className="bg-dark text-white p-2">
        <div className="container">
            <div className="d-flex justify-content-between">
                <div>
                    <i className="fas fa-map-marker-alt me-2"></i>123 Main St, Cityville, State
                </div>

                <div>
                    <i class="fa-solid fa-phone me-2"></i>(123) 456-7890
                </div>

                <div>
                    <a href="#" className="text-white">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-white mx-3">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Topbar;
