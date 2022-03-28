import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>this is cart</h2>
            <p>Select Item: {cart.length}</p>
        </div>
    );
};

export default Cart;