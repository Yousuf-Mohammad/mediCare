import Button from '@restart/ui/esm/Button';
import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import image from "../../images/contact us.png"

const ContactUs = () => {
    return (
        <div className="container mt-5">
            <h1 >Your Thought</h1>

            <div className='row'>

                <div className='col-md-12 col-lg-6'>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Mail Address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="Your Mail Address" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Drop Your Message Here!">
                        <Form.Control
                            as="textarea"
                            placeholder="Drop Your Message Here!"
                            style={{ height: '450px' }}
                        />
                    </FloatingLabel>
                    <Button className='submit-btn my-4' variant="primary">Submit</Button>
                </div>
                <div className='col-md-12 col-lg-6'>
                    <img src={image} alt="" />
                </div>

            </div>
        </div>
    );
};

export default ContactUs;