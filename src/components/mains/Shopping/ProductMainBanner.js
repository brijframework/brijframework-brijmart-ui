const ProductMainBanner = () =>{
    return <>
        {/* ========================================== SECTION – HERO ========================================= */}
        <div id="hero">
            <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
                <div className="item" style={{backgroundImage: 'url(assets/images/sliders/01.jpg)'}}>
                    <div className="container-fluid">
                        <div className="caption bg-color vertical-center text-left">
                        <div className="slider-header fadeInDown-1">Top Brands</div>
                        <div className="big-text fadeInDown-1">
                            New Collections
                        </div>
                        <div className="excerpt fadeInDown-2 hidden-xs">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                        </div>
                        <div className="button-holder fadeInDown-3">
                            <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a>
                        </div>
                        </div>
                        {/* /.caption */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.item */}
                <div className="item" style={{backgroundImage: 'url(assets/images/sliders/02.jpg)'}}>
                    <div className="container-fluid">
                        <div className="caption bg-color vertical-center text-left">
                        <div className="slider-header fadeInDown-1">Spring 2016</div>
                        <div className="big-text fadeInDown-1">
                            Women <span className="highlight">Fashion</span>
                        </div>
                        <div className="excerpt fadeInDown-2 hidden-xs">
                            <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span>
                        </div>
                        <div className="button-holder fadeInDown-3">
                            <a href="index6c11.html?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a>
                        </div>
                        </div>
                        {/* /.caption */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.item */}
            </div>
            {/* /.owl-carousel */}
        </div>
        {/* ========================================= SECTION – HERO : END ========================================= */}	
            {/* ============================================== INFO BOXES ============================================== */}
        <div className="info-boxes wow fadeInUp">
            <div className="info-boxes-inner">
                <div className="row">
                    <div className="col-md-6 col-sm-4 col-lg-4">
                        <div className="info-box">
                        <div className="row">
                            <div className="col-xs-12">
                                <h4 className="info-box-heading green">money back</h4>
                            </div>
                        </div>
                        <h6 className="text">30 Days Money Back Guarantee</h6>
                        </div>
                    </div>
                    {/* .col */}
                    <div className="hidden-md col-sm-4 col-lg-4">
                        <div className="info-box">
                        <div className="row">
                            <div className="col-xs-12">
                                <h4 className="info-box-heading green">free shipping</h4>
                            </div>
                        </div>
                        <h6 className="text">Shipping on orders over $99</h6>
                        </div>
                    </div>
                    {/* .col */}
                    <div className="col-md-6 col-sm-4 col-lg-4">
                        <div className="info-box">
                        <div className="row">
                            <div className="col-xs-12">
                                <h4 className="info-box-heading green">Special Sale</h4>
                            </div>
                        </div>
                        <h6 className="text">Extra $5 off on all items </h6>
                        </div>
                    </div>
                    {/* .col */}
                </div>
                {/* /.row */}
            </div>
            {/* /.info-boxes-inner */}
        </div>
        {/* /.info-boxes */}
        {/* ============================================== INFO BOXES : END ============================================== */}

    </>
}

export default ProductMainBanner;