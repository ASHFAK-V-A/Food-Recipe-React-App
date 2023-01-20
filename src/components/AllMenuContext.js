import React, { useEffect,useState } from "react";

export const AllMenuContext = React.createContext()



export const AllMenus =(props)=>{


    let [menu,SetMenu] = useState([])
    let [loading,SetLoading] = useState(false)

    async function  getAllMenus(){
        SetLoading(true)
        const API_URL ="https://www.themealdb.com/api/json/v1/1/search.php?f=c"
         let response = await fetch(API_URL)
         let data = await  response.json()
         SetMenu (data.meals)
         SetLoading(false)
      
    }


    useEffect (()=>{
        getAllMenus();
   
            },[])    
        

    return(

<AllMenuContext.Provider value={menu}>
{!loading ? 
 props.children :null}
</AllMenuContext.Provider>
    )
}
