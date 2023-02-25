import { useContext } from "react"
import { StateContext } from "../Context/AppProvider"

const Checkout= ()=>{
    const cartPackage = useContext(StateContext)
 

  let items = cartPackage.cartItems.map((Item)=>{
console.log(cartPackage);
        return(
    

 
    <div style={{margin:30}}>

 
       <li>
   <img src={Item.img} className='border-radius' alt="" />
            <h2>{Item.title}</h2>    

       </li>
         </div>     
        )

        
        })
    return(

        <>
  <div className="special-dishes-list">
  <ul className="flex flex-wrap" style={{marginLeft:80}}>
  {items}
    </ul>
    </div>

    </>
 
        
    )

}

export default Checkout