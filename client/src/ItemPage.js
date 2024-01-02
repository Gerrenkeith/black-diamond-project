import React from "react";
import StarRating from "./StarRating";
import blackdiamond from "./blackdiamondlogo.png";

function ItemPage ({item}){
  console.log(item)
  
    return (
        <div className="ItemPage">
            <div className="productSection">
                <div></div>
                <div>
                    <h2>{item.name}</h2>
                    <div><StarRating rating={3}/><h4>5 reviews</h4></div>
                    <div>
                        <h3>{item.price}</h3> 
                        <select className="clothingSize">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="XXXL">XXXL</option>
                        </select>
                        <select className="clothingColor">
                            <option value="yellow">Yellow</option>
                            <option value="green">Green</option>
                            <option value="black">Black</option>
                            <option value="white">White</option>
                            <option value="grey">Grey</option>
                            <option value="Blue">Blue</option>
                        </select>
                    </div>
                    <div className="clothingDescription">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                               sed<br/> do eiusmod tempor incididunt ut labore et dolore magna <br/>
                               aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            </p>
                    </div>
                    <div>
                        <button className="addToCart">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="similarProducts">
                <h2>Similar Products</h2>
                <div>
                <div className="preview">
                            <div >
                                <img className="diamond4" src={blackdiamond} alt="blackdiamond"/>
                            </div>
                            <div>
                                <h3>PRODUCT NAME</h3><StarRating rating={3} />
                            </div>
                            <div>
                                <h3>$300</h3>
                            </div>
                        </div>
                        <div className="preview">
                            <div >
                                <img className="diamond4" src={blackdiamond} alt="blackdiamond"/>
                            </div>
                            <div>
                                <h3>PRODUCT NAME</h3><StarRating rating={3} />
                            </div>
                            <div>
                                <h3>$300</h3>
                            </div>
                        </div>
                        <div className="preview">
                            <div >
                                <img className="diamond4" src={blackdiamond} alt="blackdiamond"/>
                            </div>
                            <div>
                                <h3>PRODUCT NAME</h3><StarRating rating={3} />
                            </div>
                            <div>
                                <h3>$300</h3>
                            </div>
                        </div>
                </div>

            </div>
            <div className="reviews">
                <h2>Reviews</h2>
                <div>
                    <div>





                    </div>
                </div>
            </div>
            <section className="stamp">
                <h3>©️ Black Diamond Dynamics</h3>
            </section>
        </div>
    )
};

export default ItemPage;   