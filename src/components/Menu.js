

import React, { useEffect, useState } from "react";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

function Menus(){

    let [menu,SetMenu] = useState([])
    let [categories ,SetCategory] = useState([])
    let [loading,SetLoading] = useState(true)
    let [singalDish,SetsingleDish] = useState([])


   async function  getAllMenus(){
        const API_URL ="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
         let response = await fetch(API_URL)
         let data = await  response.json()
         SetMenu (data.meals)
         SetLoading(false)
      
    }

    
   async function  getAllCategories(){
    const API_URL ="https://www.themealdb.com/api/json/v1/1/categories.php"
     let response = await fetch(API_URL)
     let categoryData = await  response.json()
     SetCategory (categoryData.categories)
  
}

    
async function  getOnlyoneDish(){
    const API_URL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"
     let response = await fetch(API_URL)
     let singaldishdata = await  response.json()
     SetsingleDish(singaldishdata.meals)
  
}



   

useEffect (()=>{
getAllMenus();
getAllCategories();
getOnlyoneDish();
    },[])    

 menu.map((item)=>{

        return(
<>
               <img src={item.strMealThumb}  alt="" />
           <h1>{item.strMeal}</h1>

    </>    
        )
        
 

    })


    return(
        <>
   <Hero />
   {!loading === true?  <SpecialDishes SpecialDish={menu}/> :null}
   {!loading ?  <FilteredDishes  
   categoriesData ={categories} 
   allMenus={menu}
   singleDish={singalDish}
   setsigledish={SetsingleDish}/>:null}
   
        </>
    )
}

export default Menus