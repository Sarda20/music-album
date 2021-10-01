import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    let total = 0;

    //Total salary after adding the musicians
    for (const person of cart) {
        total = total + person.salary;
    }

    return (
        <div className='cart'>
            <h4>Musicians Added: {props.cart.length}</h4>
            <h6>Total Salary: $ {total}</h6>
            <button type="button" class="btn btn-primary">Confirm</button>
        </div>
    );
};

export default Cart;