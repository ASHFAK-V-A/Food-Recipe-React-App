import { useContext } from "react"
import { StateContext } from "../Context/AppProvider"

const Checkout= ()=>{
    const cartPackage = useContext(StateContext)
 
    console.log("Pacd",cartPackage);

    let addToCartItem = cartPackage.cartItems.map((Item)=>{

        return(
        <div className="addcart">
            <img src={Item.img} alt="" />
            <h6>{Item.title}</h6>
        </div>
        
           
        )

        
        })
    return(
        <div className="Checkout">
{addToCartItem}
        </div>
        
    )

}

export default Checkout