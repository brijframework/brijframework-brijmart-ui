import React,{useContext} from 'react';
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import {ProductContext} from './BodyContainer'

function BodyProductContainer() {
    const {products} = useContext(ProductContext);
    
    const compareObjects = (object1, object2, key) =>{
        const obj1 = object1[key];
        const obj2 = object2[key];
        console.log("object1 : ",obj1)
        console.log("object2 : ",obj2)
        console.log(obj1 < obj2)
        console.log(obj1 > obj2)
        if (obj1 < obj2) {
          return -1
        }
       
        if (obj1 > obj2) {
          return 1
        }
        return 0
      };
    const sortingProducts = (list,sort) => {
        if(!Array.isArray(list)){
            return [];
        }
        console.log("list=",list)
        switch (sort) {
            case 2:
                list.sort((pro1,pro2)=>compareObjects(pro1, pro2, 'id'));
                break;
            case 3:
                list.sort((pro1,pro2)=>compareObjects(pro2, pro1, 'id'));
                break;
            
            default:
                list.sort((pro1,pro2)=>compareObjects(pro1, pro2, 'name'));
                break;
        }
        return list;
    }

    

    function splitArray( array ) {
        let arrayOfArrays = [];
        while (array.length > 0) {
            let arrayElement = array.splice(0,1);
            if(arrayElement.length>0)
            arrayOfArrays.push(arrayElement);
        }
        console.log("arrayOfArrays=",arrayOfArrays)
        return arrayOfArrays;
    }
    return (
        <div id="myTabContent" className="tab-content category-list">
            <div className="tab-pane active " id="grid-container">
                <div className="category-product">
                    <div className="row" >
                    {
                        splitArray(products.getList()).map((list,index)=>{
                            sortingProducts(list,products.getSort().index).map((product)=>{
                                return <div key={product.id}   className="col-sm-6 col-md-4 wow fadeInUp"><ProductGrid key={product.id}   detail = {product} ></ProductGrid></div>
                            });
                        })
                        
                    }
                    </div>
                </div>
            </div>
            <div className="tab-pane "  id="list-container">
                <div className="category-product">
                    <div className="category-product-inner wow fadeInUp">
                    {
                        sortingProducts(products.getSort().index).map((product)=>{
                            return <ProductList key={product.id}  detail = {product} ></ProductList>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyProductContainer;