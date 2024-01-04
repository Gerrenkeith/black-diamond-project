import React from "react";
import blackdiamond from "./blackdiamondlogo.png";

function Cart ({ cart, addToCart}) {

    const cartList = cart.map((item) => (
        <div className="cartList" key={item.id}>
            <img src={blackdiamond} width="100px" height="125px" alt="blackdiamond"/>
            <div>
                <h3>{item.name}</h3>
                <h4>{item.price}</h4>
                <p>{item.description}</p>
            </div>
            <div>
             <button onClick={() => addToCart(item) }>▲</button>   
             {item.quantity}
            </div>       
        </div>
    ))
    
    

    return (
        <div className="Cart">
            {cartList}
        </div>
    )
}

export default Cart;