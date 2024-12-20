import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Recommended Section */}
                    <div className="col-md-3">
                        <h5>Recommended</h5>
                        <ul className="list-unstyled">
                            <li>realme C75</li>
                            <li>realme 13+ 5G</li>
                            <li>realme Note 60</li>
                            <li>realme C61</li>
                            <li>realme C65</li>
                            <li>realme 12</li>
                            <li>realme 12+ 5G</li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="col-md-3">
                        <h5>Support</h5>
                        <ul className="list-unstyled">
                            <li>FAQ</li>
                            <li>Troubleshooting</li>
                        </ul>
                    </div>

                    {/* About realme Section */}
                    <div className="col-md-3">
                        <h5>About realme</h5>
                        <ul className="list-unstyled">
                            <li>Our Brand</li>
                            <li>Newsroom</li>
                        </ul>
                    </div>

                    {/* Contact realme Section */}
                    <div className="col-md-3">
                        <h5>Contact realme</h5>
                        <ul className="list-unstyled">
                            <li>Whatsapp</li>
                            <li><a href="mailto:service.pk@realme.com" className="text-light">service.pk@realme.com</a></li>
                        </ul>
                        <p>04238048018</p>
                        <p>09:30 - 18:00, MON - SAT</p>
                        <p>Exclude Holidays</p>
                        <div className="d-flex gap-2">
                            <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>

                <hr className="bg-light" />
                <div className="d-flex justify-content-between">
                    <p>Pakistan ( English / PKR )</p>
                    <p>&copy; 2019-2024 realme. All Rights Reserved.</p>
                    <div>
                        <a href="#" className="text-light mx-2">User Agreement</a>
                        <a href="#" className="text-light mx-2">Privacy Policy</a>
                        <a href="#" className="text-light mx-2">Terms of Sales</a>
                        <a href="#" className="text-light mx-2">Warranty Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
