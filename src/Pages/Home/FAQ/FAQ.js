import React from 'react';
import { Accordion } from 'react-bootstrap'
import image from '../../../images/FAQ.png'

const FAQ = () => {
    return (
        <div id="FAQ" className="container mt-5">
            <div class="row justify-content-md-center">
                <h1>Why Choose US!</h1>
                <div className="col-md-12 col-sm-12 col-lg-6">
                    <img style={{ width: '100%' }} src={image} alt="" />
                </div>
                <div className="col-md-12 col-sm-12 col-lg-6">

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Excellent Services</Accordion.Header>
                            <Accordion.Body>
                                Clinical excellence must be the priority for any health care service provider. mediCare Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Qualified Doctors</Accordion.Header>
                            <Accordion.Body>
                                SQUARE Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK & quality hospitals in the Middle East. Even the nurses & technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Great Infrastructure</Accordion.Header>
                            <Accordion.Body>
                                Hospital has 3 buildings on both sides of the Panthapath Main Road, connected by an over bridge. The hospital with more than 6 lac square feet of space is situated in the central region of Dhaka city, capital of Bangladesh.

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQ;