import React, { useState } from 'react'

function Pagination(props) {
  


    let numberofpages=[]

    for(let i =1;i<=Math.ceil(props.filteredDishesAre.length/props.ItemPerpage); i++){
        numberofpages.push(i)
    }




    let pages = numberofpages.map((pagenumber)=>{
        return(
            <li id={pagenumber} onClick={showNextDishesHandler}>{pagenumber}</li>
        )
    })

  return (
    <section>
  <ul className='pagination flex'>
    {pages}
   </ul> 
    </section>

  )
  function showNextDishesHandler(event){
    let currentPage = event.target.id
     props.setCurrnetpage(currentPage)

}
}

export default Pagination
