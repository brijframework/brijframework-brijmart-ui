import React,{useState} from 'react';

function ProductList({detail}) {
    return (
        <div className="products">
            <div className="product-list product">
                <div className="row product-list-row" style={{borderStyle : 'initial', border : '10px' ,  marginBottom : '45px'}}>
                    <div className="col col-sm-4 col-lg-4">
                    <div className="product-image">
                        <div className="image">
                            <img src={detail.image} alt="" width ="100%" height="100%"/>
                        </div>
                    </div>
                    </div>
                    <div className="col col-sm-8 col-lg-8">
                    <div className="product-info">
                        <h3 className="name"><a href={detail.url}>{detail.name}</a></h3>
                        <div className="rating rateit-small"></div>
                        <div className="product-price">	
                            <span className="price">{detail.price}</span>
                            <span className="price-before-discount">{detail.discount}</span>
                        </div>
                        { /* /.product-price */ }
                        <div className="description">{detail.description}</div>
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
                                    <i className="fa fa-signal"></i>
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={detail.tag.className}><span>{detail.tag.name}</span></div>
            </div>
        </div>
    )
}

export default ProductList;