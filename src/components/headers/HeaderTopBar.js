import {
    Link
  } from "react-router-dom";
const HeaderTopBar = ({account})=>{

    const linkIcons = {
        "account" : "icon fa fa-user",
        "wishlist" : "icon fa fa-heart",
        "myCart" : "icon fa fa-shopping-cart",
        "checkout":"icon fa fa-check",
        "login":"icon fa fa-lock"
    }

    const dropdownList = (dropdowns) =>{
        return dropdowns.map(dropdown =>{
            return  <li className="dropdown dropdown-small">
                        <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">
                        <span className="value"> {dropdown.name} </span><b className="caret"></b></a>
                        <ul className="dropdown-menu">
                        {
                            dropdown.options.map(option=>{
                                return <li><a href="#"><i className={linkIcons[option.type]}></i>{option.name}</a></li>
                            })
                        }
                        </ul>
                    </li>
        })
    }

    const linkList = (links) =>{
        return links.map(link =>{
            return <li><Link to={link.url}><i className={linkIcons[link.type]}></i>{link.name}</Link></li>
        })
    }

    return (
           <div className="top-bar animate-dropdown">
                <div className="container">
                    <div className="header-top-inner">
                        <div className="cnt-account">
                        <ul className="list-unstyled">
                            {
                                linkList(account.links)
                            }
                        </ul>
                        </div>
                        {/*/.cnt-account */}
                        <div className="cnt-block">
                        <ul className="list-unstyled list-inline">
                            {
                                dropdownList(account.dropdwons)
                            }
                         </ul>
                        {/*/.list-unstyled */}
                        </div>
                        {/*/.cnt-cart */}
                        <div className="clearfix"></div>
                    </div>
                    {/*/.header-top-inner */}
                </div>
                {/*/.container */}
            </div>
           
    )
}

export default HeaderTopBar;