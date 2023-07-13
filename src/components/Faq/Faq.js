import React from 'react';
import './Faq.css';
const Faq = () => {
    return (
        <div className="mt-5 pt-5">
            <div id="contact" className="contact p-5">
                <h2 className="text-center my-4">Contact US</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly.</p>
                <div className="row">
                    <div className="col-md-9 mb-md-0 mb-5 col-lg-7">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"/>
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"/>
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="matter" name="matter" className="form-control"/>
                                        <label htmlFor="subject" className="">Matter</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label htmlFor="message">Details about Matter</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="text-center text-md-left">
                            <button className="btn btn-primary">Send</button>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center col-lg-5">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <h5>Address</h5>
                                <p>Zigatola, Dhanmondi, Dhaka-1209</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <h5>Cell Number</h5>
                                <p>+88017777777</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <h5>Email</h5>
                                <p>homepharma.chd@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

                </div>
        </div>
    );
};

export default Faq;