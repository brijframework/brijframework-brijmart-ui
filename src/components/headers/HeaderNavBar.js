
import { Link } from "react-router-dom";

const HeaderNavBar = ({categories}) =>{

    const navbarSubCategories= (category) =>{
        return category.categories.map((category)=> {
            return (
                <div className="col-xs-12 col-sm-6 col-md-2 col-menu">
                    <h2 className="title">{category.name}</h2>
                    <ul className="links">
                     {
                        category.categories.map((category)=> {
                           return <li key={category.id}><Link to={category.link}>{category.name}</Link></li>
                       })
                     }
                    </ul>
                </div>
            )
        })
    }

    const navbarCategories = (categories) =>{
        return <>
        <li key="1" className="dropdown yamm-fw">
            <Link id="header_home" to="/" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Home</Link>
        </li>
        {
            categories.map((category)=>{
                if(category.categories == undefined ||category.categories === null){
                    return <li key={category.id} className="dropdown yamm-fw">
                                <Link to={category.link} data-hover="dropdown" className="dropdown-toggle" 
                                data-toggle="dropdown">{category.name}</Link>
                        </li>
                } else{
                    return (
                        <li key={category.id} className="dropdown mega-menu">
                            <Link to={category.link} data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">
                                {category.name} <span className="menu-label hot-menu hidden-xs">hot</span>
                            </Link>
                            <ul className="dropdown-menu container">
                                <li key={category.id}>
                                    <div className="yamm-content ">
                                        <div className="row">
                                            {
                                                navbarSubCategories(category)
                                            }
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    )
                }
            })
        }
        </>
    }

    return (
        <>
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
                <div className="nav-bg-className">
                <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                    <div className="nav-outer">
                        <ul className="nav navbar-nav">
                           {
                             navbarCategories(categories)
                           }
                        </ul>
                        {/*/.navbar-nav */}
                        <div className="clearfix"></div>
                    </div>
                    {/*/.nav-outer */}
                </div>
                {/*/.navbar-collapse */}
                </div>
                {/*/.nav-bg-className */}
            </div>
            {/*/.navbar-default */}
        </div>
        {/*/.container-className */}
    </div>
    
   </>
    )
}

export default HeaderNavBar;