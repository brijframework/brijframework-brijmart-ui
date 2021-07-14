import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const FeaturedProductList = ({productObjectList}) =>{
    return  (
        <div id="product-tabs-slider1" className="scroll-tabs outer-top-vs wow fadeInUp">
            <div className="more-info-tab clearfix ">
                <h3 className="new-product-title pull-left">New Products</h3>
                <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                    <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
                    <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
                    <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
                    <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
                </ul>
                {/* /.nav-tabs */}
            </div>
            <div className="tab-content outer-top-xs">
                <div className="tab-pane in active" id="all">
                        <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                                {
                                    productObjectList.map(productObject=>{
                                    return (
                                        <div className="item item-carousel">
                                        <div className="products">
                                            <div className="product">
                                            <div className="product-image">
                                                <div className="image">
                                                    <Link to={productObject.link}><img  src={productObject.image} alt=""/></Link>
                                                </div>
                                                {/* /.image */}			
                                                <div className={productObject.tag.className}><span>{productObject.tag.name}</span></div>
                                            </div>
                                            {/* /.product-image */}
                                            <div className="product-info text-left">
                                                <h3 className="name"><a href="detail.html">{productObject.name}</a></h3>
                                                <div className="rating rateit-small"></div>
                                                <div className="description">{productObject.description}</div>
                                                <div className="product-price">	
                                                    <span className="price">
                                                        {productObject.price}			
                                                    </span>
                                                    <span className="price-before-discount">{productObject.discount}</span>
                                                </div>
                                                {/* /.product-price */}
                                            </div>
                                            {/* /.product-info */}
                                            <div className="cart clearfix animate-effect">
                                                <div className="action">
                                                    <ul className="list-unstyled">
                                                        <li className="add-cart-button btn-group">
                                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                                        <i className="fa fa-shopping-cart"></i>													
                                                        </button>
                                                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                                        </li>
                                                        <li className="lnk wishlist">
                                                        <a className="add-to-cart" href="detail.html" title="Wishlist">
                                                        <i className="icon fa fa-heart"></i>
                                                        </a>
                                                        </li>
                                                        <li className="lnk">
                                                        <a className="add-to-cart" href="detail.html" title="Compare">
                                                        <i className="fa fa-signal" aria-hidden="true"></i>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* /.action */}
                                            </div>
                                            {/* /.cart */}
                                            </div>
                                            {/* /.product */}
                                        </div>
                                    {/* /.products */}
                                </div>
                                )
                            
                            })
                        }
                    
                    </div>
                </div>
                <div className="tab-pane in" id="smartphone">
                        <div className="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                                {
                                    productObjectList.map(productObject=>{
                                    return (
                                        <div className="item item-carousel">
                                        <div className="products">
                                            <div className="product">
                                            <div className="product-image">
                                                <div className="image">
                                                    <Link to={productObject.link}><img  src={productObject.image} alt=""/></Link>
                                                </div>
                                                {/* /.image */}			
                                                <div className={productObject.tag.className}><span>{productObject.tag.name}</span></div>
                                            </div>
                                            {/* /.product-image */}
                                            <div className="product-info text-left">
                                                <h3 className="name"><a href="detail.html">{productObject.name}</a></h3>
                                                <div className="rating rateit-small"></div>
                                                <div className="description">{productObject.description}</div>
                                                <div className="product-price">	
                                                    <span className="price">
                                                        {productObject.price}			
                                                    </span>
                                                    <span className="price-before-discount">{productObject.discount}</span>
                                                </div>
                                                {/* /.product-price */}
                                            </div>
                                            {/* /.product-info */}
                                            <div className="cart clearfix animate-effect">
                                                <div className="action">
                                                    <ul className="list-unstyled">
                                                        <li className="add-cart-button btn-group">
                                                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button">
                                                        <i className="fa fa-shopping-cart"></i>													
                                                        </button>
                                                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                                                        </li>
                                                        <li className="lnk wishlist">
                                                        <a className="add-to-cart" href="detail.html" title="Wishlist">
                                                        <i className="icon fa fa-heart"></i>
                                                        </a>
                                                        </li>
                                                        <li className="lnk">
                                                        <a className="add-to-cart" href="detail.html" title="Compare">
                                                        <i className="fa fa-signal" aria-hidden="true"></i>
                                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* /.action */}
                                            </div>
                                            {/* /.cart */}
                                            </div>
                                            {/* /.product */}
                                        </div>
                                    {/* /.products */}
                                </div>
                                )
                            
                            })
                        }
                    
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default FeaturedProductList;