import React from 'react';
 // Ensure to create a corresponding CSS file for styles

const Footer = () => {
    return (
        <div>
            {/* Footer Start */}
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Useful Links</h3>
                                <ul>
                                    <li><a href="#">Pellentesque</a></li>
                                    <li><a href="#">Aliquam</a></li>
                                    <li><a href="#">Fusce placerat</a></li>
                                    <li><a href="#">Nulla hendrerit</a></li>
                                    <li><a href="#">Maecenas</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Quick Links</h3>
                                <ul>
                                    <li><a href="#">Posuere egestas</a></li>
                                    <li><a href="#">Sollicitudin</a></li>
                                    <li><a href="#">Luctus non</a></li> 
                                    <li><a href="#">Duis tincidunt</a></li>
                                    <li><a href="#">Elementum</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Get in Touch</h3>
                                <div className="contact-info">
                                    <p><i className="fa fa-map-marker"></i>Ludhiana , Punjab</p>
                                    <p><i className="fa fa-envelope"></i>harshkumar58011@gmail.com</p>
                                    <p><i className="fa fa-phone"></i>+91 9815766373</p>
                                    <div className="social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook"></i></a>
                                        <a href=""><i className="fab fa-linkedin"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Newsletter</h3>
                                <div className="newsletter">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed porta dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos
                                    </p>
                                    <form>
                                        <input className="form-control" type="email" placeholder="Your email here" />
                                        <button className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

            
            {/* Footer Bottom End */}
        </div>
    );
}

export default Footer;
