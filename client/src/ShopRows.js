import React from "react";
import ShopCard from "./ShopCard";


function ShopRows ({items, addToCart}){
    console.log(items)


    return (
        <div className="ShopRows">
            {items.map((item, index) => ( 
                    <ShopCard key={index} item={item} addToCart={addToCart} />
            ))}
        </div>
    )
} 

export default ShopRows;