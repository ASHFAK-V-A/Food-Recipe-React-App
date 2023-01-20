

import React, { useEffect, useState } from "react";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";



function Menus(){

    // States

   
    let [categories ,SetCategory] = useState([])

    let [singalDish,SetsingleDish] = useState([])

   // =========//


    // Function's
    
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


//======//


// Hooks created 
   

useEffect (()=>{

getAllCategories();
getOnlyoneDish();
    },[])    

 // ------ //






    return(
        <>
 {/* Components */}
  <Header />
   <Hero />


{/* Step 2  = Creating Wrapper  for passing into child components*/}

<AllMenus> 

   
    <SpecialDishes /> 
    
   <FilteredDishes  
   categoriesData ={categories} 
   singleDish={singalDish}
   setsigledish={SetsingleDish}/>
  </AllMenus>
        </>
        ///====//
    )
}

export default Menus