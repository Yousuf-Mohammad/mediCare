import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { key, name, description, img } = service;
    return (
        <div className="service pb-3" >
            <img style={{ height: '400px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/details/${key}`}>
                <button className="btn btn-primary ">know more</button>
            </Link>
        </div>
    );
};

export default Service;