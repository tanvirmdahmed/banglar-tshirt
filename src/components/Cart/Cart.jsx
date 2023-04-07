import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // let message;
    // if (cart.length === 0) {
    //     message = <p>Please add some product</p>
    // }
    // else {
    //     message = <div>
    //         <h3>Boroloxx</h3>
    //         <p><small>Thanks for giving your money</small></p>
    //     </div>
    // }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order Summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>something</p>
            {
                cart.length > 2 && <p className='purple'>Double bonanza!!!!</p>
            }
            {
               cart.length === 3 ||  <h3>তিনটা তো হইল না</h3>
            }
            {/* logical && condition */}
            {/* ternary operator */}
            {/* {cart.length === 0 ? 
            <p>Please add some product</p> : 
            <div>
                <h3>Boroloxx</h3>
                <p><small>Thanks for giving your money</small></p>
            </div>
            } */}
            {/* if else condition */}
            {/* {message} */}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;

/**
 * Conditional Rendering
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will displayed)
 * 4. Logical || (if the condition is false then the next thing will be displayed)
 * */ 

/**
 * Conditional CSS Class
 * 1. use ternary
 * 2. ternary inside template string
 * */ 