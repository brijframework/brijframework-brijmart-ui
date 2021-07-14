const WideProductBanner = ({columns}) =>{
    return   ( 
    <div className="wide-banners wow fadeInUp outer-bottom-xs">
       
       { columns =="1"?
       <div className="row">
            <div className="col-md-12">
                <div className="wide-banner cnt-strip">
                    <div className="image">
                    <img className="img-responsive" src="assets/images/banners/home-banner.jpg" alt=""/>
                    </div>
                    <div className="strip strip-text">
                    <div className="strip-inner">
                        <h2 className="text-right">New Mens Fashion<br/>
                            <span className="shopping-needs">Save up to 40% off</span>
                        </h2>
                    </div>
                    </div>
                    <div className="new-label">
                    <div className="text">NEW</div>
                    </div>
                    {/* /.new-label */}
                </div>
                {/* /.wide-banner */}
            </div>
            {/* /.col */}
        </div>
        :
    
        <div className="row">
            <div className="col-md-7 col-sm-7">
                <div className="wide-banner cnt-strip">
                    <div className="image">
                    <img className="img-responsive" src="assets/images/banners/home-banner1.jpg" alt=""/>
                    </div>
                </div>
                {/* /.wide-banner */}
            </div>
            {/* /.col */}
            <div className="col-md-5 col-sm-5">
                <div className="wide-banner cnt-strip">
                    <div className="image">
                    <img className="img-responsive" src="assets/images/banners/home-banner2.jpg" alt=""/>
                    </div>
                </div>
                {/* /.wide-banner */}
            </div>
            {/* /.col */}
         </div>
        }
    </div>
    )
}

export default WideProductBanner;