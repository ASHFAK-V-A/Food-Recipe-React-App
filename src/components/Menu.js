

import React, { useEffect, useState } from "react";
import Hero  from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";



// Createing Global Context. Its help to share data's in child components .Declare 1 time access everywhere ;

// Step 1  Creating Global Context ;
export  const AllMenuContext = React.createContext()


// Step 2 Creating Wrapper  Line No :94 ;

// Step 3  Export Global context ;

// Step 4 Import  where ever you want ;

// Step 5 page [SpecialDishes], line No : 14 ;







function Menus(){

    // States

    let [menu,SetMenu] = useState([])
    let [categories ,SetCategory] = useState([])
    let [loading,SetLoading] = useState(true)
    let [singalDish,SetsingleDish] = useState([])

   // =========//


    // Function's

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


//======//


// Hooks created 
   

useEffect (()=>{
getAllMenus();
getAllCategories();
getOnlyoneDish();
    },[])    

 // ------ //



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
 {/* Components */}
  <Header />
   <Hero />


{/* Step 2  = Creating Wrapper  for passing into child components*/}

<AllMenuContext.Provider value={menu}>

   {!loading === true? 
    <SpecialDishes SpecialDish={menu}/> :null}
   {!loading ?  
   <FilteredDishes  
   categoriesData ={categories} 
   singleDish={singalDish}
   setsigledish={SetsingleDish}/>:null}
   </AllMenuContext.Provider>
        </>
        ///====//
    )
}




export default Menus