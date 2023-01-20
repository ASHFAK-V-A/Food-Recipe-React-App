import React ,{useContext} from 'react'
import { AllMenuContext } from './AllMenuContext';


function Popup({closePopupHandler,currentDish,Totalmenus}) {


  const allMenus = useContext(AllMenuContext)

  let Dishdetails = allMenus.filter((menuItem)=>{
    return menuItem.strMeal ==currentDish
  }).map((item)=>{
    return (
      <div className='popup-contnet-data'>
               <div className='popup-header'> 
              <img src={item.strMealThumb} alt="" />    
             <h5  className='popup-header-category'>{item.strCategory}</h5>
                 </div> 

                    <h2>{item.strMeal}</h2>
                  

               <ul  className='dish-ingredients'>
                  <li>{item.strIngredient1}</li>
                  <li>{item.strIngredient2}</li>
                  <li>{item.strIngredient3}</li>
                  <li>{item.strIngredient4}</li>
               </ul>
  <p>{item.strInstructions}</p>
       </div>
    )
  })
  return (
    <div className='popup'>   
        <div className='popup-content'> 
        {Dishdetails}

           <button>Order Now</button> 
           <button className='popup-close' onClick={closePopupHandler}>Close</button>
        </div> 
 
  
</div>
  )
}

export default Popup
