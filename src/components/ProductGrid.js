import React,{useState} from 'react';

function ProductGrid({detail}) {
    return (
        <div className="products">
            <div className="product">
                <div className="product-image">
                <div className="image">
                    <a href="detail.html"><img  src={detail.image} alt="" /></a>
                </div>		
                <div className={detail.tag.className}><span>{detail.tag.name}</span></div>
                </div>
                { /* /.product-image */ }
                <div className="product-info text-left">
                <h3 className="name"><a href={detail.url}>{detail.name}</a></h3>
                <div className="rating rateit-small"></div>
                <div className="description"></div>
                <div className="product-price">	
                    <span className="price">{detail.price}</span>
                    <span className="price-before-discount">{detail.discount}</span>
                </div>
                </div>
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
    )
}

export default ProductGrid;