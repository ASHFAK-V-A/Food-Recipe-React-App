import { useContext } from "react"
import { StateContext } from "../Context/AppProvider"

const Checkout= ()=>{
    const cartPackage = useContext(StateContext)
 
    console.log("Pacd",cartPackage);

  let items = cartPackage.cartItems.map((Item)=>{
console.log(cartPackage);
        return(
        
<>

 <img className="checkoutimg" src={Item.img} alt="" />
            <h2>{Item.title}</h2>  
     

</>
        
        
           
        )

        
        })
    return(

        <>
       <div className="container-checkout">
            <div className="card-checkout">
    
{items}
</div></div>
    </>
 
        
    )

}

export default Checkout