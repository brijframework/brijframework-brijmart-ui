import React,{useContext} from 'react';
import {ProductContext} from './BodyContainer'

function Pagination() {
    const {products} = useContext(ProductContext);
    
    return (
        <div className="pagination-container">
            <ul className="list-inline list-unstyled">
            <li className="prev"><a onClick={() => products.addActiveClass(products.activeClassIndex()-1)}><i className="fa fa-angle-left" ></i></a></li>
            {
                products.activeClasses.map((x, i) =>{
                    if(i==0){
                        return <li key = {i} className={products.activeClassIndex()===i ? "active btn-default" : ""} ><a data-toggle="tab" href= {"#grid-container-"+(i)} onClick={() => products.addActiveClass(i)}>{i+1}</a></li>
                    }else{
                        return <li key = {i} className={products.activeClassIndex()===i ? "active btn-default" : ""} ><a data-toggle="tab" href= {"#grid-container-"+(i)} onClick={() => products.addActiveClass(i)} >{i+1}</a></li>
                    }
                })
            }
            <li className="next"><a onClick={() => products.addActiveClass(products.activeClassIndex()+1)} ><i className="fa fa-angle-right"></i></a></li>
            </ul>
        </div>
    )
}

export default Pagination;