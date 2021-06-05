import React,{useState} from 'react';

function BodyBanner(params) {

    return (
        <div id="category" class="category-carousel hidden-xs">
            <div class="item">	
                <div class="image">
                    <img src="assets/images/banners/cat-banner-1.jpg" alt="" class="img-responsive" width="100%"/>
                </div>
                <div class="container-fluid">
                    <div class="caption vertical-top text-center">
                        <div class="big-text">
                            Big Sale
                        </div>

                        <div class="excerpt hidden-sm hidden-md">
                            Save up to 49% off
                        </div>
                        <div class="excerpt-normal hidden-sm hidden-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyBanner;