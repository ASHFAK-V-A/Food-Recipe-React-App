
const AddToCart = ({addToCart})=>{
console.log(addToCart.img);
let addToCartItem = addToCart.map((Item)=>{

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
<h6 className="Your-Cart">Your Cart</h6>
      {addToCartItem}
 </div>
    </div>
    

)
}

export default AddToCart