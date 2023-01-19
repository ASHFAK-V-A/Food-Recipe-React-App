import React from 'react'

function CardDishes(props) {
    

  return (
   
     <li>
     <a href="javaScript:;" onClick={()=>props.showPopUp(props.menuitem.strMeal)} className="listStyle" >
          <img src={props.menuitem.strMealThumb} className="border-radius alt="/>
          <h2 >{props.menuitem.strMeal}</h2>
     </a>
     </li>


  )
}



export default CardDishes
