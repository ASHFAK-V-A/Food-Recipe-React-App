import React, { useState } from 'react'

export default function FilteredDishes( props) {


let [allMenus,setAllMenu] = useState(props.allMenus)

let [filteredDish, setFileteddish] = useState([])

let [activeDish,setActiveDish] = useState()



    function ShowFilteredDishesHandler(categorie){
setActiveDish(categorie)
let  filteredDishesAre= allMenus.filter((item)=>{
return(
    item.strCategory ===categorie
)
}).map((item)=>{
    return(
<>
 <li>
    <img src={item.strMealThumb} className="border-radius alt="/>
     <h2>{item.strMeal}</h2>
    </li>
</>
          
    )


})
 setFileteddish(filteredDishesAre)
    }

    console.log(filteredDish.length);
    
    let allCategories=props.categoriesData.map((item)=>{
        return(
            <>
             <li className={item.strCategory == activeDish ?"active":""} onClick={()=>{ShowFilteredDishesHandler(item.strCategory)}}>{item.strCategory}</li>
            </>
           
        )
    })

  return (
    <div className='filtered-dishes'>
        <div className="container">
        <div className="text-center"> 
       <h2>Choose your dishes</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi labore aut a maiores quia ut laudantium dolore. Reprehenderit iusto ut obcaecati voluptatem eligendi exercitationem!</p>
            
   </div>

    <div className="filterd-dishes">

<ul className='flex flex-center'>
    {allCategories}

</ul>
</div>
 <div className="filtered-dishes-results">
    <ul className="flex flex-wrap gap">
        {filteredDish.length !=0 ? filteredDish : 
        <div className='alert'>
            <h3>Sorry,No items found.</h3>
            <h4>Please,try another dishes</h4>
            </div>
            }

    </ul>
 </div>
    </div>
    </div>
  )

}
