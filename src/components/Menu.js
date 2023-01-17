

import React, { useEffect, useState } from "react";
import Hero  from "./Hero";

function Menus(){

    let [menu,SetMenu] = useState([])


   async function  getAllMenus(){
        const API_URL ="https://www.themealdb.com/api/json/v1/1/search.php?f=a"
         let response = await fetch(API_URL)
         let data = await  response.json()
         SetMenu (data.meals)
      
    }
   console.log("menus are",menu);
    useEffect (()=>{
getAllMenus()
    },[])    

    let menus = menu.map((item)=>{
console.log(item);
        return(
<>
               <img src={item.strMealThumb} alt="" />
           <h1>{item.strMeal}</h1>

    </>    
        )
        
 

    })
  

    return(
        <>
   <Hero />
    
        </>
    )
}

export default Menus