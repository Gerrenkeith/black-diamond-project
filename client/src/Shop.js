import React from 'react';
import ShopRows from "./ShopRows";

function Shop ({items, addToCart}) {

    const groupedItems = Array.from({ length: Math.ceil(items.length / 5)}, (_, index) => 

            items.slice(index * 5, index * 5 + 5)
    );

    console.log(groupedItems)

    return (
        
        <div className="Shop"> 
            {groupedItems.map((group, index) => ( 
                <ShopRows key={index} items={group} addToCart={addToCart}/>
            ))}
             <section className="stamp">
                <h3>©️ Black Diamond Dynamics</h3>
            </section>
        </div>

    );

};

export default Shop;
