import React from 'react';
import './SingleFood.css';

const SingleFood = (props) => {
    const { strMeal, strCategory, strMealThumb } = props.food;
    return (
        <div className="card">
            <div style={{ textAlign: "center" }}>
                <img style={{ height: "300px" }} src={strMealThumb} alt="" />
            </div>
            <h3>{strMeal}</h3>
            <p>Category: {strCategory}</p>
            <button onClick={() => props.orderFood(props.food)} className="foodBtn"><i class="fas fa-cart-plus"></i>&nbsp;&nbsp;Add to Cart</button>
        </div>
    );
};

export default SingleFood;