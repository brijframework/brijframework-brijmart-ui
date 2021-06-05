import React from 'react';
import BodyMenu from './BodyMenu';
import BodyMain from './BodyMain';


function BodyContent() {
    return (
        <div className="body-content outer-top-xs">
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 col-sm-12 col-xl-12 sidebar'>
                    <BodyMenu></BodyMenu>
                </div>
                { /* /.sidebar */ }
                <div className='col-md-9 col-sm-12 col-xl-12'>
                    { /* ========================================== SECTION – HERO ========================================= */ }
                    <BodyMain></BodyMain>
                    { /* /.search-result-container */ }
                </div>
                { /* /.col */ }
            </div>
            { /* /.row */ }
            { /* ============================================== BRANDS CAROUSEL ============================================== */ }
            <div id="brands-carousel" className="logo-slider wow fadeInUp">
                <div className="logo-slider-inner">
                    <div id="brand-slider" className="owl-carousel brand-slider custom-carousel owl-theme">
                    <div className="item m-t-15">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item m-t-10">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand3.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand6.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand2.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand4.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand1.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    <div className="item">
                        <a href="#" className="image">
                        <img data-echo="assets/images/brands/brand5.png" src="assets/images/blank.gif" alt=""/>
                        </a>	
                    </div>
                    { /*/.item*/ }
                    </div>
                    { /* /.owl-carousel #logo-slider */ }
                </div>
                { /* /.logo-slider-inner */ }
            </div>
            { /* /.logo-slider */ }
            { /* ============================================== BRANDS CAROUSEL : END ============================================== */ }	
        </div>
        { /* /.container */ }
        </div>
    );
}

export default BodyContent;