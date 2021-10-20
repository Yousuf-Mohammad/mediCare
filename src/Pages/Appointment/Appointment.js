import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import image from "../../images/appointment.png"

const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (

        <div className="container mt-5">
            <h1 >Get Your Appointment </h1>

            <div className='row'>

                <div className='col-md-12 col-lg-6'>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Department"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Department" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Doctor's Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Doctor's Name" />
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
                    <h5>when you want your appointment</h5>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <img src={image} alt="" />
                </div>

            </div>
        </div>

    );
};

export default Appointment;