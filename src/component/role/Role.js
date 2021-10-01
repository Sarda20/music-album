import React from 'react';
import './Role.css'
const Role = (props) => {
    const { name, age, img, role, salary, country } = props.musician;
    return (
        //For each Card
        <div className='card'>
            <img src={img} className="card-img-top"></img>
            <h5 className="card-title">Name: {name}</h5>
            <h5 className="card-title">Age: {age}</h5>
            <h5 className="card-title">Country: {country}</h5>
            <h5 className="card-title">Role: {role}</h5>
            <h5 className="card-title">Salary: $ {salary}</h5>
            <button type="button" className="btn btn-success" onClick={() => props.handleCart(props.musician)}><i className="fas fa-music" ></i>
                Add</button>

        </div>
    );
};

export default Role;