import React, { useContext, useState ,useEffect} from 'react'
import CardDishes from './CardDishes'
import Pagination from './Pagination'
import { AllMenuContext } from './AllMenuContext'
export default function FilteredDishes( props) {


    //States 

    let allMenus = useContext(AllMenuContext)
    let [filteredDish,setFileteddish] = useState([])
    let [activeDish,setActiveDish] = useState("Beef")
    let [currentPage,setCurrentPage] = useState(1)
    let [ItemPerpage,setItemPerpage] = useState(4)
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



//Pagination

let indexOfLastDish= currentPage * ItemPerpage;

// Explain more

// 1 X 4 = 4;
// 2 X 4 = 8;
// 3 x 4 = 12;

let indexOffirstDish = indexOfLastDish - ItemPerpage

// 4 - 4 =0;
// 8 - 4 =4;
// 12 - 4 =8;

// Slice Method

let showdishesnow = filteredDish.slice(indexOffirstDish,indexOfLastDish)


let MaxSpecialDishes = 8;

let singleDishItems = singalDish.map((item,index)=>{
    if(index < MaxSpecialDishes){
    return(
        <>
         <li>
            <img src={item.strMealThumb} className="border-radius alt="/>
             <h2>{item.strMeal}</h2>
            </li>
        </>
                  
            )
    }
})

function ShowFilteredDishesHandler(categorie){

    SetsingleDish([])
setActiveDish(categorie)

let  filteredDishesAre= allMenus.filter((item)=>{

return(
    item.strCategory ===categorie
)
}).map((menuitem)=>{
    return(
       <>
     <CardDishes  menuitem={menuitem}/>
        </>
          
    )


})
 setFileteddish(filteredDishesAre)
    }

    let allCategories= categories.map((item)=>{
        return(
            <>
             <li className={item.strCategory == activeDish ?"active":""}

              onClick={()=>{ShowFilteredDishesHandler(item.strCategory)}}>

                {item.strCategory}

                </li>
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
        {singleDishItems}
        {singleDishItems.length !=0|| showdishesnow.length !=0 ?showdishesnow : 
        <div className='alert'>
            <h3>Sorry,No items found. </h3>
            <h4>Please,try another dishes</h4>
            </div>
            }

    </ul>
 </div>


<Pagination filteredDishesAre={filteredDish}
ItemPerpage={ItemPerpage} 
currentPage = {currentPage}
setCurrnetpage={setCurrentPage} 


/> 

</div>
    </div>
  )

}