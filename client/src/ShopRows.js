import React from "react";
import ShopCard from "./ShopCard";


function ShopRows ({items}){
    console.log(items)


    return (
        <div className="ShopRows">
            {items.map((item, index) => ( 
                    <ShopCard key={index} item={item} />
            ))}
        </div>
    )
} 

export default ShopRows;