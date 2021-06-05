import React from 'react';

import '../App.css';

function SearchBox( {categories, name}) {

    const categoriesList=() =>{
        return  categories.map(category => {
           return  <li role="presentation" key={category.id}><a role="menuitem" tabIndex="-1" href="home.html" >{category.name}</a></li>
        });
     }
 
    return (
        <div className="search-area">
        <form>
            <div className="control-group">
                <ul className="categories-filter animate-dropdown">
                    <li className="dropdown">
                        <a className="dropdown-toggle"  data-toggle="dropdown" href="category.html">Categories 
                            <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu" role="menu" >
                        {
                            categoriesList()
                        }
                        </ul>
                    </li>
                </ul>
                <input className="search-field" placeholder="Search here..." onKeyUp={name} />
                <a className="search-button" href="#" ></a>    
            </div>
        </form>
    </div>
    
    )
}

export default SearchBox;