import React,{useState} from 'react';
import BodyProductContainer from "./BodyProductContainer";
import Pagination from './Pagination'
import SortPosition from "./SortPosition";
import ShowOn from "./ShowOn";
import FilterTabs from "./FilterTabs";
export const ProductContext = React.createContext();

function ProductProvider(props) {


    let initProducts = [
        {
            "id": 1,
            "image" : "assets/images/products/p1.jpg",
            "url" : "detail.html",
            "name" :"Broccoli",
            "description" : "Broccoli is an edible green plant in the cabbage family whose large flowering head, stalk and small associated leaves are eaten as a vegetable. Broccoli is classified in the Italica cultivar group of the species",
            "price" : 14.5,
            "discount": 20,
            "tag" : {
                "className" : "tag sale",
                "name" : "sale"
            }
        },
        {
            "id": 2,
            "image" : "assets/images/products/p2.jpg",
            "url" : "detail.html",
            "name" :"Pea",
            "description":"The pea is most commonly the small spherical seed or the seed-pod of the pod fruit Pisum sativum. Each pod contains several peas, which can be green or yellow. Botanically, pea pods are fruit, since they contain seeds and develop from the ovary of a flower.",
            "price" : 16.5,
            "discount": 20,
            "tag" : {
                "className" : "tag new",
                "name" : "New"
            }
        }
    ]
  
    const [sort, updateSort] = useState({index: 1, orderBy : 'position'});
    const [pageSize, updatePageSize] = useState(1);
    const [pageIndex, updatePageIndex] = useState(1);

    let products = { 
        sort : sort,
        pageSize : pageSize,
        pageIndex : pageIndex,
        getList : function(){
            return initProducts;
        },

        setList : function(list){
            initProducts=list;
        },
        
        setSort : function(sort ) {
           updateSort(sort);
        },

        getSort : function() {
            return sort;
        },

        setPageSize : function(pageSize){
            updatePageSize(pageSize);
        },
        getPageSize : function(){
            return pageSize;
        },

        setPageIndex : function (pageIndex){
            updatePageIndex(pageIndex);
        },
       
        getPageIndex : function() {
            return pageIndex;
        },

        getTotalPage : function(){
           return this.getPageSize()> this.getList().length ? 1 : (this.getList().length % this.getPageSize())== 0 ? this.getList().length/ this.getPageSize(): this.getList().length/ this.getPageSize()+ 1 
        }
     }
    
    return (
        <ProductContext.Provider value={ {products}}>
            {props.children}   
        </ProductContext.Provider>
    )

}

function BodyContainer() {
   
    return (
        <ProductProvider>
            <div className="clearfix filters-container m-t-10">
                <div className="row">
                    <div className="col col-sm-2 col-md-2">
                        <FilterTabs></FilterTabs>
                    </div>
                    <div className="col col-sm-4 col-md-8">
                        <div className="col col-sm-6 col-md-6 no-padding">
                            <SortPosition></SortPosition>
                        </div>
                        <div className="col col-sm-6 col-md-6 no-padding">
                            <ShowOn></ShowOn>
                        </div>
                    </div>
                    <div className="col col-sm-4 col-md-2 text-right">
                        <Pagination></Pagination>		
                    </div>
                </div>
            </div>
            <div className="search-result-container ">
                <BodyProductContainer></BodyProductContainer>
                <div className="clearfix filters-container">
                    <div className="text-right">
                        <Pagination></Pagination>						    
                    </div>
                </div>
            </div>
        </ProductProvider>
    )
}

export default BodyContainer;