import React,{useState} from 'react';

import BodyShopbyMenu from "./BodyShopbyMenu";

function BodyMenu(params) {
    return (
        <>
        { /* ================================== TOP NAVIGATION ================================== */ }
           
        { /* ================================== TOP NAVIGATION : END ================================== */ }	            
        <div className="sidebar-module-container">
        <div className="sidebar-filter">
        
        { /* ============================================== SIDEBAR CATEGORY ============================================== */ }
          <BodyShopbyMenu></BodyShopbyMenu>
        { /* /.sidebar-widget */ }
        { /* ============================================== SIDEBAR CATEGORY : END ============================================== */ }
        { /* ============================================== PRICE SILDER============================================== */ }
        <div className="sidebar-widget wow fadeInUp">
        <div className="widget-header side-menu animate-dropdown outer-bottom-xs  ">
            <h4 className="widget-title head">Price Slider</h4>
        </div>
        <div className="sidebar-widget-body m-t-10">
            <div className="price-range-holder">
                <span className="min-max">
                <span className="pull-left">$200.00</span>
                <span className="pull-right">$800.00</span>
                </span>
                <input type="text" id="amount" style={{border:0, color:'#666666', 'font-weight':'bold','text-align':'center'}}/>
                <input type="text" className="price-slider" value="" />
            </div>
            { /* /.price-range-holder */ }
            <a href="#" className="lnk btn btn-primary">Show Now</a>
        </div>
        { /* /.sidebar-widget-body */ }
        </div>
        { /* /.sidebar-widget */ }
        { /* ============================================== PRICE SILDER : END ============================================== */ }
        { /* ============================================== MANUFACTURES============================================== */ }
        <div className="sidebar-widget wow fadeInUp">
        <div className="widget-header  side-menu animate-dropdown outer-bottom-xs ">
            <h4 className="widget-title head">Manufactures</h4>
        </div>
        <div className="sidebar-widget-body">
            <ul className="list">
                <li><a href="#">Forever 18</a></li>
                <li><a href="#">Nike</a></li>
                <li><a href="#">Dolce & Gabbana</a></li>
                <li><a href="#">Alluare</a></li>
                <li><a href="#">Chanel</a></li>
                <li><a href="#">Other Brand</a></li>
            </ul>
            { /*<a href="#" className="lnk btn btn-primary">Show Now</a>*/ }
        </div>
        { /* /.sidebar-widget-body */ }
        </div>
        { /* /.sidebar-widget */ }
        { /* ============================================== MANUFACTURES: END ============================================== */ }
        { /* ============================================== COLOR============================================== */ }
        <div className="sidebar-widget wow fadeInUp">
        <div className="widget-header side-menu animate-dropdown outer-bottom-xs ">
            <h4 className="widget-title head">Colors</h4>
        </div>
        <div className="sidebar-widget-body">
            <ul className="list">
                <li><a href="#">Red</a></li>
                <li><a href="#">Blue</a></li>
                <li><a href="#">Yellow</a></li>
                <li><a href="#">Pink</a></li>
                <li><a href="#">Brown</a></li>
                <li><a href="#">Teal</a></li>
            </ul>
        </div>
        { /* /.sidebar-widget-body */ }
        </div>
        { /* /.sidebar-widget */ }
        { /* ============================================== COLOR: END ============================================== */ }
        { /* ============================================== COMPARE============================================== */ }
        <div className="sidebar-widget wow fadeInUp outer-top-vs  side-menu animate-dropdown outer-bottom-xs ">
        <h3 className="section-title head" >Compare products</h3>
        <div className="sidebar-widget-body">
            <div className="compare-report">
                <p>You have no <span>item(s)</span> to compare</p>
            </div>
            { /* /.compare-report */ }
        </div>
        { /* /.sidebar-widget-body */ }
        </div>
        { /* /.sidebar-widget */ }
        { /* ============================================== COMPARE: END ============================================== */ }
        { /* ============================================== PRODUCT TAGS ============================================== */ }
        <div className="sidebar-widget product-tag wow fadeInUp outer-top-vs  side-menu animate-dropdown outer-bottom-xs ">
        <h3 className="section-title head">Product tags</h3>
        <div className="sidebar-widget-body outer-top-xs">
            <div className="tag-list">					
                <a className="item" title="Phone" href="category.html">Phone</a>
                <a className="item active" title="Vest" href="category.html">Vest</a>
                <a className="item" title="Smartphone" href="category.html">Smartphone</a>
                <a className="item" title="Furniture" href="category.html">Furniture</a>
                <a className="item" title="T-shirt" href="category.html">T-shirt</a>
                <a className="item" title="Sweatpants" href="category.html">Sweatpants</a>
                <a className="item" title="Sneaker" href="category.html">Sneaker</a>
                <a className="item" title="Toys" href="category.html">Toys</a>
                <a className="item" title="Rose" href="category.html">Rose</a>
            </div>
            { /* /.tag-list */ }
        </div>
        { /* /.sidebar-widget-body */ }
        </div>
        { /* /.sidebar-widget */ }
        { /* ============================================== PRODUCT TAGS : END ============================================== */ }		            	{ /* { /* ============================================== Testimonials============================================== */ }
        <div className="sidebar-widget  wow fadeInUp outer-top-vs ">
        <div id="advertisement" className="advertisement">
            <div className="item">
                <div className="avatar"><img src="assets/images/testimonials/member1.png" alt="Image"/></div>
                <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                <div className="clients_author">John Doe	<span>Abc Company</span>	</div>
                { /* /.container-fluid */ }
            </div>
            { /* /.item */ }
            <div className="item">
                <div className="avatar"><img src="assets/images/testimonials/member3.png" alt="Image"/></div>
                <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                <div className="clients_author">Stephen Doe	<span>Xperia Designs</span>	</div>
            </div>
            { /* /.item */ }
            <div className="item">
                <div className="avatar"><img src="assets/images/testimonials/member2.png" alt="Image"/></div>
                <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                <div className="clients_author">Saraha Smith	<span>Datsun &amp; Co</span>	</div>
                { /* /.container-fluid */ }
            </div>
            { /* /.item */ }
        </div>
        { /* /.owl-carousel */ }
        </div>
        { /* ============================================== Testimonials: END ============================================== */ }
        <div className="home-banner">
        <img src="assets/images/banners/LHS-banner.jpg" alt="Image"/>
        </div>
        </div>
        { /* /.sidebar-filter */ }
        </div>
        { /* /.sidebar-module-container */ }         
        </>
    )
}

export default BodyMenu;