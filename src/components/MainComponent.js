
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ShoppingProduct from './mains/ShoppingProduct'
import Account from './mains/Account'
import Wishlist from './mains/Wishlist'
import Checkout from './mains/Checkout'
import ShoppingCart from './mains/ShoppingCart'
import LoginModel from "./headers/LoginModel";

const MainComponent =({search})=>{
    return ( 
       <div className="body-content outer-top-xs" id="top-banner-and-menu">
          <Switch>
            <Route exact path="/">
               <ShoppingProduct search={search}></ShoppingProduct>
             </Route>
            <Route exact path="/myaccount"  >
               <Account></Account>
            </Route>
            <Route exact path="/wishlist"  >
              <Wishlist></Wishlist>
            </Route>
            <Route exact path="/checkout"  >
              <Checkout></Checkout>
            </Route>
            <Route exact path="/shopping-cart"  >
              <ShoppingCart></ShoppingCart>
            </Route>  
            <Route exact path="/login"  >
              <LoginModel></LoginModel> 
            </Route>          
          </Switch>
    </div>
           
    )
}

export default MainComponent;