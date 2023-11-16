import React from "react";
import blackdiamond from "./blackdiamondlogo.png";
import StarRating from "./StarRating";

function Home(){
    return (
        <div className="home">
            <div className="title">
                    <h1>Black Diamond</h1>
            </div>
            <div className="line-space"></div>
            <div>
                <img className="diamond" src={blackdiamond} alt="blackdiamond"/>
                <img className="diamond" src={blackdiamond} alt="blackdiamond"/>
                <img className="diamond" src={blackdiamond} alt="blackdiamond"/>
            <div>
                <button className="shopNow">Shop Now</button>
                </div> 
            </div>
                <section className="featured1">
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
                </section>
                <section className="newsletter">
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
                </section>
                <section className="featured2">
                    <div>   
                        <div>
                            <img className="diamond3" src={blackdiamond} alt="blackdiamond"/>
                        </div>
                        <div className="productName"> 
                            <h3>PRODUCT NAME</h3><StarRating rating={3} />
                        </div>
                        <div>
                            <h3>$300</h3>
                        </div>
                    </div>
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
                            <div>
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
                    <div >
                        <div className="preview">
                            <div>
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
                            <div>
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
            </section>
            <section className="about">
                <h2>About Your Shop</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br/> laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
            </section>
            {/* <section className="info">
                <div className="logo">
                    <img className="diamond5" src={blackdiamond} alt="blackdiamond"/>
                    <address>1717 Harrison St, San Francisco, CA 94103, USA</address>
                </div>
                <div>
                    <a>MAIN MENU</a>
                    <a>Home</a>
                    <a>About</a>
                    <a>Shop</a>
                    <a>Help</a>
                </div>
                <div>
                    <a>COMPANY</a>
                    <a>The Company</a>
                    <a>Careers</a>
                    <a>Press</a>
                </div>
                <div>
                    <a>DISCOVER</a>
                    <a>The Team</a>
                    <a>Our History</a>
                    <a>Brand Motto</a>
                </div>
                <div>
                    {/* <a>FIND US ON</a>
                    <a>Facebook</a>
                    <a>Titter</a>
                    <a>Instagram</a> 
                </div>
            </section> */}
            <section className="stamp">
                <h3>©️ Black Diamond Dynamics</h3>
            </section>
        </div>
    );
}

export default Home; 