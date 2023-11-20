import React from "react";
import ShopCard from "./ShopCard";
function Shop () {

    const shopItems = [
        { id: 1, name: 'item 1', price: '$300' },
        { id: 2, name: 'Item 2', price: '$300' },
        { id: 3, name: 'Item 3', price: '$300' },
        { id: 4, name: 'Item 4', price: '$300' },
        { id: 5, name: 'Item 5', price: '$300' },
        { id: 6, name: 'Item 6', price: '$300' },
        { id: 7, name: 'Item 7', price: '$300' },
    ];

    return (
        
        <div className="Shop"> 
            {shopItems.map((item) => (<ShopCard key={item.id} items={item} />))}
        </div>

    );

};

export default Shop;
