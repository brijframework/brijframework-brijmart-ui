import React,{useContext} from 'react';
import {ProductContext} from './BodyContainer'

function Pagination() {
    const {products} = useContext(ProductContext);
    ;
    return (
        <div className="pagination-container">
            <ul className="list-inline list-unstyled">
            <li className="prev"><a href="#"><i className="fa fa-angle-left"></i></a></li>
            {
                [...Array(products.getTotalPage())].map((x, i) =>{
                    if(i==0){
                        return <li className="active" ><a data-toggle="tab" href= {"#page"+(i+1)} >{i+1}</a></li>
                    }else{
                        return <li ><a data-toggle="tab" href= {"#page"+(i+1)} >{i+1}</a></li>
                    }
                })
            }
            <li className="next"><a href="#"><i className="fa fa-angle-right"></i></a></li>
            </ul>
        </div>
    )
}

export default Pagination;