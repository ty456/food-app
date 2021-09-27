import React from 'react';
import './Cart.css';

const Cart = (props) => {

    console.log(props.item);
    const { strMeal, strMealThumb, strCategory } = props.item;

    return (
        <div className="item">
            <div className="item-info">
                <h3>{strMeal}</h3>
                <p>Category: {strCategory}</p>
            </div>
            <div className="item-img">
                <img src={strMealThumb} alt="" />
            </div>
        </div>
    );
};

export default Cart;