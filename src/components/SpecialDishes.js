function SpecialDishes(props){

    let MaxSpecialDishes = 8;


let TotalMenus = props.SpecialDish.map((item,index)=>{
    if(index < MaxSpecialDishes){


return(
    <>

        <li>
            <img src={item.strMealThumb} className="border-radius" />
      <h4>  {item.strMeal} </h4>
          
        </li>

    </>
)

    }

})



    return(
<section className="special-dishes">
    <div className="container">
<div className="special-dishes-content text-center">
    <h2>Our Special Dishes</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nulla iure atque? Illo repellat iste, soluta tempora officia labore commodi reiciendis voluptatem veritatis tenetur?</p> 
</div>
<div className="special-dishes-list">
<ul className="flex flex-wrap gap">
    {TotalMenus}  
</ul>



</div>
   </div>
</section>

    )
}

export default SpecialDishes;