import { useState,useContext } from "react";
import CardDishes from "./CardDishes";
import { AllMenuContext } from "./AllMenuContext";
import Popup from "./Popup";
import AddToCart from "./AddToCart";

function SpecialDishes(props){
    console.log("septe",props);
    const allMenus = useContext(AllMenuContext)

let [showPopUp , setShowPopup] = useState(false)
let [currentDish,setCurrentDish] = useState('')
let [addToCart, setAddtoCart] = useState([])
//Lets Show Popup Handler
function showPopupHandler (dishname){
    setCurrentDish(dishname)
    setShowPopup(true)
}


//Lets Close Popup Handler

function closePopupHandler(){
    setShowPopup(false)
}


/// Add To Cart Handler

function AddToCartHandler (CartImg,CartItem){
setAddtoCart(
    [
        ...addToCart,
     {
        "img":CartImg,
        "title":CartItem
     }
     
]
)

}




    let MaxSpecialDishes = 8;


    let TotalMenus = allMenus.map((item,index)=>{
        if(index < MaxSpecialDishes){
    return(
         <>
          <CardDishes
           menuitem={item} 
          showPopUp={showPopupHandler} />
          </>
           )
            }
    
            }
            )
    
        console.log(TotalMenus);



    return(
      
<section className="special-dishes"> 
{showPopUp  && <Popup closePopupHandler={closePopupHandler} 
currentDish={currentDish}
Totalmenus={props.SpecialDish}
AddToCartHandler={AddToCartHandler}
/>}


     <div className="container">
        <AddToCart addToCart={addToCart}/>
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