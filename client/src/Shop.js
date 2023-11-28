import React from "react";
import ShopRows from "./ShopRows";

function Shop () {

    const items = [
        { id: 1, name: 'item 1', price: '$300' },
        { id: 2, name: 'Item 2', price: '$300' },
        { id: 3, name: 'Item 3', price: '$300' },
        { id: 4, name: 'Item 4', price: '$300' },
        { id: 5, name: 'Item 5', price: '$300' },
        { id: 6, name: 'Item 6', price: '$300' },
        { id: 7, name: 'Item 7', price: '$300' },
        { id: 8, name: 'Item 8', price: '$300' },
        { id: 9, name: 'Item 9', price: '$300' },
        { id: 10, name: 'Item 10', price: '$300' },
        { id: 11, name: 'Item 11', price: '$300' },
    ];

    const groupedItems = Array.from({ length: Math.ceil(items.length / 5)}, (_, index) => 

            items.slice(index * 5, index * 5 + 5)
    );

    console.log(groupedItems)

    return (
        
        <div className="Shop"> 
            {groupedItems.map((group, index) => ( 
                <ShopRows key={index} items={group} />
            ))}
        </div>

    );

};

export default Shop;
