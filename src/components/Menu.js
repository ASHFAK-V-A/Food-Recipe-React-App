

import React, { useEffect, useState } from "react";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
function Menus(){

    let [menu,SetMenu] = useState([])
    let [categories ,SetCategory] = useState([])

   async function  getAllMenus(){
        const API_URL ="https://www.themealdb.com/api/json/v1/1/search.php?f=C"
 

         let response = await fetch(API_URL)
         let data = await  response.json()
         SetMenu (data.meals)
      
    }

    
   async function  getAllCategories(){
    const API_URL ="https://www.themealdb.com/api/json/v1/1/categories.php"
     let response = await fetch(API_URL)
     let categoryData = await  response.json()
     SetCategory (categoryData.categories)
  
}


console.log(SetCategory);
   

    useEffect (()=>{
getAllMenus();
getAllCategories();
    },[])    

 menu.map((item)=>{
console.log(item);
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
    <SpecialDishes SpecialDish={menu}/>
    <FilteredDishes  categoriesData ={categories} allMenus={menu}/>
        </>
    )
}

export default Menus