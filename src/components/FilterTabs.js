import React from 'react';

function FilterTabs() {
    return (
        <div className="filter-tabs">
            <ul id="filter-tabs" className="nav nav-tabs nav-tab-box nav-tab-fa-icon">
            <li className="active">
                <a data-toggle="tab" href="#grid-container"><i className="icon fa fa-th-large"></i>Grid</a>
            </li>
            <li><a data-toggle="tab" href="#list-container"><i className="icon fa fa-th-list"></i>List</a></li>
            </ul>
        </div>
    )
}

export default FilterTabs;