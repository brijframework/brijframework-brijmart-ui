import React from 'react';

function BodyBanner(params) {

    return (
        <div id="category" className="category-carousel hidden-xs">
            <div className="item">	
                <div className="image">
                    <img src="assets/images/banners/cat-banner-1.jpg" alt="" className="img-responsive" width="100%"/>
                </div>
                <div className="container-fluid">
                    <div className="caption vertical-top text-center">
                        <div className="big-text">
                            Big Sale
                        </div>

                        <div className="excerpt hidden-sm hidden-md">
                            Save up to 49% off
                        </div>
                        <div className="excerpt-normal hidden-sm hidden-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyBanner;