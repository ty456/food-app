import React, { useState, useEffect } from 'react';
import './Foods.css';
import SingleFood from "./../SingleFood/SingleFood";
import Cart from "./../Cart/Cart";

const Foods = () => {

    const [foods, setFoods] = useState([]);

    const [cart, setCart] = useState([]);

    const [searchItem, setSearchItem] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
            .then(res => res.json())
            .then(data => {
                setFoods(data.meals);
                setSearchItem(data.meals);
            })
    }, [])

    // console.log(foods);

    const orderFood = (item) => {
        const existItem = cart.find(pd => pd.idMeal === item.idMeal);
        if (existItem) {
            alert("This item already added!!");
        }
        else {
            const newCart = [...cart, item];
            setCart(newCart);
        }
    }

    const searchFood = (event) => {
        const searchText = event.target.value.toLowerCase();
        const matchedItems = foods.filter(items => items.strMeal.toLowerCase().includes(searchText));
        setSearchItem(matchedItems);
    }

    // console.log(cart);

    return (
        <div>
            <div className="search-area">
                <input onChange={searchFood} type="text" placeholder="search food..." />
            </div>
            <div className="foods-container">
                <div className="item-container">
                    {
                        searchItem?.map(food => <SingleFood key={food.idMeal} orderFood={orderFood} food={food} />)
                    }
                </div>
                <div className="cart-container">
                    <div style={{ textAlign: "center" }}>
                        <h1>Order Summery</h1>
                        <h3><i class="fas fa-shopping-cart"></i>&nbsp;{cart.length}</h3>
                    </div>
                    {
                        cart.map(item => <Cart key={item.idMeal} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;