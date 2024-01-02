import React from "react";
import blackdiamond from "./blackdiamondlogo.png";
import StarRating from "./StarRating";
import { Link } from 'react-router-dom';

function ShopCard ({item, addToCart}){
  console.log(item.id)

    return (
        <div className="ShopCard">  
          <div className="ShopItemImg">
            <img src={blackdiamond} alt="blackdiamond"/>
          </div>
          <div className="ShopItemDescription">
            <span><strong>{item.name}</strong></span>
            <Link key={item.id} to={`/item/${item.id}`}>
              <p>Flat Bench, Foldable Flat Weight Bench Easy Assembly for Strength Training Bench Press, 600/1000 LBS 2 Versions </p>
              </Link>
            <StarRating rating={3} />
            <span>3K+ bought in past month</span>
            <h3>${item.price}</h3>
            <h5>Free Shipping</h5>
          </div>
          <button className="addToCart" onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    )
};

export default ShopCard;