import React,{useContext} from 'react';
import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";
import {ProductContext} from './BodyContainer'


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

function splitArrayIntoChunksOfLen(arr, len) {
    var chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, len>=n ? n : i += len));
    }
    return chunks;
}



function BodyProductContainer() {
    const {products} = useContext(ProductContext);

    return (
        <div id="myTabContent" className="tab-content category-list">
            <div className="tab-pane active " id="grid-container">
                <div className="category-product">
                    {
                        splitArrayIntoChunksOfLen(products.getList(), products.getPageSize()).map((list, index)=>{
                            return (
                                <div id={"myTabContent-grid-"+index} className="tab-content">
                                    <div className={products.activeClassIndex()===index ? "tab-content category-product tab-pane active" : "category-product tab-pane"}  id={"grid-container-"+index}>
                                        <div className="row" >
                                        {
                                            <PageContant key={index}  products = {list}  sortIndex = {products.sortIndex}></PageContant>
                                        }
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
               </div>
            </div>
            <div className="tab-pane "  id="list-container">
                <div className="category-product">
                    <div className="category-product-inner">
                    {
                        splitArrayIntoChunksOfLen(products.getList(), products.getPageSize()).map((list, index)=>{
                        return (
                            <div id={"myTabContent-list-"+index} className="tab-content">
                                <div className={products.activeClassIndex()===index ? "tab-pane active" : "tab-pane"}  id={"list-container-"+index}>
                                    <div className="row" >
                                    {
                                        sortingProducts(list, products.sortIndex ).map((product)=> <ProductList key={product.id}  detail = {product} ></ProductList>)
                                    }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
 
function PageContant({products, sortIndex}){
     return sortingProducts(products, sortIndex ).map((product)=><div key={product.id}   className="col-sm-6 col-md-4"><ProductGrid key={product.id}   detail = {product} ></ProductGrid></div>);
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