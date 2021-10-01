import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Role from '../role/Role';
import './Musician.css'

const Musician = () => {
    const [musicians, setMusician] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./musician.JSON')
            .then(res => res.json())
            .then(data => setMusician(data));
    }, [])

    //Add Musician button function
    const handleCart = (musician) => {
        const newcart = [...cart, musician];
        setCart(newcart);
    }
    return (
        <div className='body'>
            <div className='body-card'>
                {
                    musicians.map(musician => <Role handleCart={handleCart} musician={musician} key={musician.id}></Role>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Musician;