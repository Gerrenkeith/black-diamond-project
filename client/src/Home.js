import React from "react";
import blackdiamond from "./blackdiamondlogo.png";
function Home(){
    return (
        <div className="home">
                <div className="title">
                    <h1>Black Diamond</h1>
                </div>
                <div className="line-space"></div>
                <div >
                    <img className="diamond" src={blackdiamond} alt="blackdiamond"/>
                    <img className="diamond" src={blackdiamond} alt="blackdiamond"/>
                    <img className="diamond" src={blackdiamond} alt="blackdiamond"/>
                    <div>
                        <button className="shopNow">Shop Now</button>
                    </div> 
                </div>
                <div className="featured">
                    <div className="products1">
                        <h1>Featured Products</h1>
                    </div>
                    <div className="display1">
                        <div> 
                            <img className="diamond2" src={blackdiamond} alt="blackdiamond"/>
                            <h3>Product Name</h3>
                            <h3>$300</h3>
                        </div>
                        <div> 
                            <img className="diamond2" src={blackdiamond} alt="blackdiamond"/>
                            <h3>Product Name</h3>
                            <h3>$300</h3>
                        </div>
                    </div>
                </div>
                <div className="newsletter">
                    <div className="part">
                        <h2>Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla <br/> quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
                    </div>
                    <div className="part">
                        <form action="/subscribe" method="post">
                            <input className="subInput" type="email" id="email" name="email" placeholder="Email Address"required />
                            <button className="subscribe" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Home; 