import React from "react";
import blackdiamond from "./blackdiamondlogo.png";

function ShopCard ({item}){
  console.log(item)
 
    return (
        <div className="ShopCard">  
          <img src={blackdiamond} />
        </div>
    )
};

export default ShopCard