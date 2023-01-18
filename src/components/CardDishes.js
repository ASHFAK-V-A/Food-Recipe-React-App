import React from 'react'

function CardDishes(props) {
    
function ShowPopupHandler(){
  alert("h")
}

  return (
   
     <li>
     <a href="javaScript:;" onClick={ShowPopupHandler} className="listStyle" >


          <img src={props.menuitem.strMealThumb} className="border-radius alt="/>
     <h2>{props.menuitem.strMeal}</h2>
     </a>


    </li>


  )
}



export default CardDishes
