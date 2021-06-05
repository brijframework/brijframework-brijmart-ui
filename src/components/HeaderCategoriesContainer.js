import React, {useState} from 'react';
import axios from 'axios';
import { getJSON } from 'jquery';

function HeaderCategoriesContainer(params) {
     const categories=params.categories;

    const categoriesList=() =>{
       return  categories.map(category => {
        return <li key={category.id} className="active dropdown yamm-fw">
                <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">{category.name}</a>
                {  category.subcategories && category.subcategories.length !=0 ?
                    <ul className="dropdown-menu">
                        <li>
                            <div className="yamm-content ">
                                <div className="row">
                                {
                                    category.subcategories.map(subcategory => {
                                        return  <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                                                    <h2 className="title">{subcategory.type}</h2>
                                                    <ul className="links">
                                                       {
                                                        subcategory.values.map(value => {
                                                           return <li key={value.id}><a href={"#"+value.name + "/" + value.link}>{value.name}</a></li>
                                                        })
                                                       }
                                                    </ul>
                                                </div>
                                    
                                    })
                                }
                                </div>
                            </div>
                        </li>
                    </ul>
                   : ""
                }
            </li>
       });
    }

    return (
        <div className="header-nav animate-dropdown">
            <div className="container">
                <div className="yamm navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="nav-bg-class">
                        <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                        <div className="nav-outer">
                            <ul className="nav navbar-nav">
                            {
                                categoriesList()
                            }
                            
                            </ul>
                            {/* /.navbar-nav */}
                            <div className="clearfix"></div>
                        </div>
                        {/* /.nav-outer */}
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                    {/* /.nav-bg-class */}
                </div>
                {/* /.navbar-default */}
            </div>
            {/* /.container-class */}
        </div>
    )
}

export default HeaderCategoriesContainer;