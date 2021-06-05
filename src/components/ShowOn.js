import React,{useContext} from 'react';
import {ProductContext} from './BodyContainer'

function ShowOn() {
    const {products} = useContext(ProductContext);

    return (
        <div className="lbl-cnt">
            <span className="lbl">Show</span>
            <div className="fld inline">
                <div className="dropdown dropdown-small dropdown-med dropdown-white inline">
                    <button data-toggle="dropdown" type="button" className="btn dropdown-toggle">
                    {products.getPageSize()} <span className="caret"></span>
                    </button>
                    <ul role="menu" className="dropdown-menu">
                        <li role="presentation"><a onClick = {()=> products.setPageSize(1)}>1</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(2)}>2</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(3)}>3</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(4)}>4</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(5)}>5</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(6)}>6</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(7)}>7</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(8)}>8</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(9)}>9</a></li>
                        <li role="presentation"><a onClick = {()=> products.setPageSize(10)}>10</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShowOn;