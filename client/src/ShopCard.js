import React from "react";
import blackdiamond from "./blackdiamondlogo.png";
import StarRating from "./StarRating";

function ShopCard ({item}){
  console.log(item)
 
    return (
        <div className="ShopCard">  
          <div className="ShopItemImg">
            <img src={blackdiamond} alt="blackdiamond"/>
          </div>
          <div className="ShopItemDescription">
            <span><strong>Brand Name</strong></span>
            <p>Flat Bench, Foldable Flat Weight Bench Easy Assembly for Strength Training Bench Press, 600/1000 LBS 2 Versions </p>
            <StarRating rating={3} />
            <span>3K+ bought in past month</span>
            <h3>$300</h3>
            <h5>Free Shipping</h5>
          </div>
          <button className="addToCart">Add to Cart</button>
        </div>
    )
};

export default ShopCard;