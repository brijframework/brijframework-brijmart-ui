import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBox from "./components/HeaderBox";
import BodyBox from "./components/BodyBox";


function App() {

  const categories=[
    {
        "id" : 1,
        "name": "Home"
        
      },
      {
        "id" : 2,
        "name": "Clothing",
        "subcategories" : [
            {
                "id" : "1",
                 "type": 'Men',
                 "values" : [{
                     "id":1,
                     "link" : "Dresses",
                      "name": "Dresses"
                     }
                     ,
                     {
                        "id":2,
                        "link" : "Shoes",
                         "name": "Shoes"
                    }
                 ]
            }
        ]
      }
];
  
  const [name, setName] = useState(0);
 
  function getName(){
    return name;
  }
  function setSeachName(event) {
    setName(event.target.value)
  }
  
  return (
    <div className="App">
        <HeaderBox seachName ={setSeachName} name={getName}  categories = {categories}></HeaderBox>
        <BodyBox></BodyBox>
    </div>
  );
}

export default App;
