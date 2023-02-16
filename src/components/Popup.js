import React ,{useContext} from 'react'
import { AllMenuContext } from './AllMenuContext';
import { DispatchContext } from '../Context/AppProvider';

function Popup({closePopupHandler,currentDish,AddToCartHandler}) {


  const allMenus = useContext(AllMenuContext)
const dispatch= useContext(DispatchContext)
console.log(dispatch);
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
                    <p>{item.strInstructions}</p>

               <ul  className='dish-ingredients'>
                  <li>{item.strIngredient1}</li>
                  <li>{item.strIngredient2}</li>

                  <li>{item.strIngredient3}</li>
                  <li>{item.strIngredient4}</li>
               </ul>
               <button onClick={()=>{
                 dispatch({type:"addtocart",
                  payload:{
                  title: item.strMeal,
                  img:item.strMealThumb
                 }})
               }}>Order Now</button> 
           <button  className='popup-close' onClick={closePopupHandler}>Close</button>

       </div>
    )
  })
  return (
    <div className='popup'>   
        <div className='popup-content'> 
        {Dishdetails} 
        </div> 
</div>
  )




}

export default Popup
