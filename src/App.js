import React,{useState, useRef} from 'react';
import { createBrowserHistory } from "history";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import MainComponent from './components/MainComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  
  const history = createBrowserHistory()
  console.log(history.location.pathname);
  const [account, updateAccount] = useState({
    "dropdwons" :[
        {
            "id": 1,
            "type": "currency",
            "name":"Currency",
             "options" : [
                {
                    "id":1,
                    "name":"USD"
                },
                {
                    "id":2,
                    "name":"INR"
                },
                {
                    "id":3,
                    "name":"GBP"
                }
             ]
        },
        {
            "id": 2,
            "type": "language",
            "name":"Language",
            "options" : [
                {
                    "id":1,
                    "name":"en",
                    "desc":"Englist"
                },
                {
                    "id":2,
                    "name":"hi",
                    "desc":"Hindi"
                }
            ]
        }
    ],
    "creditional" : {
        "token": ""
    },
    "links" : [
        {
            "name":"My account",
            "type" : "account",
            "url": "myaccount"
        },
        {
            "name":"Wish List",
            "type" : "wishlist",
            "url": "wishlist"
        },
        {
            "name":"My Cart",
            "type" : "myCart",
            "url": "mycart"
        },
        {
            "name":"Check out",
            "type" : "checkout",
            "url": "checkout"
        },
        {
            "name":"Log in",
            "type" : "login",
            "url": "checkout"
        }
    ]
  });
  const [categories, updateCategories] = useState([]);
  const [search, updateSearch] = useState("");

  const updateSearchEvent=(value)=>{
    updateSearch(value);
    if(history.location.pathname !="/"){
      history.push("/");
      document.getElementById("header_home").click();
    }
    //
  }
  
  React.useEffect(() => {
    fetch("/api/account.json").then((response) => response.json()).then((result)=>{
      updateAccount(result);
    })
    
    fetch("/api/categories.json").then((response) => response.json()).then((result)=>{
      updateCategories(result);
    })
  },[])

  return (
    <Router basename='/'>
      <HeaderComponent updateSearch = {updateSearchEvent} categories={categories}  account={account}></HeaderComponent>
      <MainComponent search={search}></MainComponent>
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
