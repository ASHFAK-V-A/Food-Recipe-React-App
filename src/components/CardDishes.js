import React from 'react'

function CardDishes(props) {
    
  return (
   
     <li>
     
    <img src={props.item.strMealThumb} className="border-radius alt="/>
     <h2>{props.item.strMeal}</h2>

    </li>


  )
}



export default CardDishes
