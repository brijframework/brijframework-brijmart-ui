import React,{useState} from 'react';

function BodyBreadcrumb() {
    return (
        <div className="breadcrumb">
            <div className="container">
                <div className="breadcrumb-inner">
                    <ul className="list-inline list-unstyled">
                        <li><a href="#">Home</a></li>
                        <li className='active'>Handbags</li>
                    </ul>
                </div>
            </div>
        </div>
      );
}

export default BodyBreadcrumb;