import { useContext } from "react";
import { StateContext } from "../Context/AppProvider";


const AddToCart = ()=>{

    const cartPackage = useContext(StateContext)
console.log(cartPackage.cartItems);
let addToCartItem = cartPackage.cartItems.map((Item)=>{

return(
<div className="addcart">
    <img src={Item.img} alt="" />
    <h6>{Item.title}</h6>
</div>

   
)

})
return(
    <div className="add-to-cart-wrapper"> 
    <div className="add-to-cart-item">
<h6 className="Your-Cart">WishList</h6>
{addToCartItem}
 </div>
    </div>
    

)
}

export default AddToCart