import React,{useContext} from 'react';
import {ProductContext} from './BodyContainer'

function SortPosition() {
    const {products} = useContext(ProductContext);
    return (
            <div className="lbl-cnt">
                <span className="lbl">Sort by</span>
                <div className="fld inline">
                    <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                        <button data-toggle="dropdown" type="button" className="btn dropdown-toggle" style = {{ position: 'absolute'}}>
                                     {products.getSort().orderBy} <span className="caret"></span>
                        </button>
                        <ul role="menu" className="dropdown-menu">
                            <li role="presentation"><a onClick={() => products.setSort({index: 1, orderBy : 'position'})}>position</a></li>
                            <li role="presentation"><a onClick={() => products.setSort({index: 2, orderBy : 'Price:Lowest first'})}>Price:Lowest first</a></li>
                            <li role="presentation"><a onClick={() => products.setSort({index: 3, orderBy : 'Price:HIghest first'})}>Price:HIghest first</a></li>
                            <li role="presentation"><a onClick={() => products.setSort({index: 4, orderBy : 'Product Name:A to Z'})}>Product Name:A to Z</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
}
    
export default SortPosition;