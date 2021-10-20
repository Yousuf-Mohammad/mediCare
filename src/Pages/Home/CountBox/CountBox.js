import React from 'react';
import CountUp from 'react-countup';

const CountBox = () => {
    return (
        <div className="container-fluid mt-5 bg-dark text-light">
            <div class="row justify-content-md-center">
                <div className="col-md-12 col-sm-12 col-lg-4">
                    <CountUp style={{ fontSize: '70px', fontWeight: 'bold' }}
                        end={1510}
                        duration={1.5}
                    />
                    <br />
                    <p style={{ fontWeight: 'bold' }}>Staffs</p>


                </div>
                <div className="col-md-12 col-sm-12 col-lg-4">
                    <CountUp style={{ fontSize: '70px', fontWeight: 'bold' }}
                        end={110}
                        duration={1.5}
                    />
                    <br />
                    <p style={{ fontWeight: 'bold' }}>Consultation Rooms</p>


                </div>
                <div className="col-md-12 col-sm-12 col-lg-4">
                    <CountUp style={{ fontSize: '70px', fontWeight: 'bold' }}
                        end={500}
                        duration={1.5}
                    />
                    <br />
                    <p style={{ fontWeight: 'bold' }}>Patients Bed</p>
                </div>



            </div>
        </div>
    );
};

export default CountBox;