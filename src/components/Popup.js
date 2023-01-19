import React from 'react'

function Popup({closePopupHandler,currentDish,Totalmenus}) {

  let Dishdetails = Totalmenus.filter((menuItem)=>{
    return menuItem.strMeal == currentDish
  }).map((item)=>{
    return (
      <div className='popup-contnet-data'>
               <div className='popup-header'> 
              <img src={item.strMealThumb} alt="" />    
               </div>
 
              <h2>{item.strMeal} </h2>  
      </div>
    )
  })
  return (
    <div className='popup'>   
        <div className='popup-content'> 
        {Dishdetails}
            <div className='btn-align'>  
           <button>Order Now</button>   </div> 
           <button className='popup-close' onClick={closePopupHandler}>Close</button>
        
       </div>
  
</div>
  )
}

export default Popup
