import React,{useContext} from 'react';
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import {ProductContext} from './BodyContainer'


function BodyProductContainer() {
    const {products} = useContext(ProductContext);

    function splitArrayIntoChunksOfLen(arr, len) {
        var chunks = [], i = 0, n = arr.length;
        while (i < n) {
          chunks.push(arr.slice(i, len));
        }
        return chunks;
      }

    return (
        <div id="myTabContent" className="tab-content category-list">
            <div className="tab-pane active " id="grid-container">
                <div className="category-product">
                    <div className="row" >
                    {products.getPageSize()}
                    {
                        
                        splitArrayIntoChunksOfLen(products.getList(), products.getPageSize()).map((list, index)=>{
                            
                            return <><PageContant key={index}  products = {list}  sortIndex = {products.sortIndex}></PageContant><br></br></>
                        })
                    }
                     
                    </div>
                </div>
            </div>
            <div className="tab-pane "  id="list-container">
                <div className="category-product">
                    <div className="category-product-inner wow fadeInUp">
                    {
                        products.getList().map((product)=>{
                            return <ProductList key={product.id}  detail = {product} ></ProductList>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
 
function PageContant({products, sortIndex}){
    
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

    return sortingProducts(products, sortIndex ).map((product)=><div key={product.id}   className="col-sm-6 col-md-4 wow fadeInUp"><ProductGrid key={product.id}   detail = {product} ></ProductGrid></div>);
}

function PageContainer({products, sortIndex}){
    function splitArray( array ) {
        let arrayOfArrays = [];
        while (array.length > 0) {
            let arrayElement = array.splice(0,1);
            if(arrayElement.length>0)
            arrayOfArrays.push(arrayElement);
        }
        return arrayOfArrays;
    }
    let ARRAY_LIST=[];
    splitArray(products).forEach((list, index)=>{
        console.log("stringify  = ",JSON.stringify(list))
        ARRAY_LIST.push(<PageContant key={index} products = {list} sortIndex={sortIndex}></PageContant>)
    });
    return ARRAY_LIST;
}


export {PageContant, PageContainer};
export default BodyProductContainer;