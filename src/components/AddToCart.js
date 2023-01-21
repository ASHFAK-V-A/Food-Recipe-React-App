
const AddToCart = ({addToCart})=>{

return(
    <div className="add-to-cart-wrapper"> 
    <div className="add-to-cart-item">
        <img src={addToCart} alt="" />
        <h6>item name</h6>
    </div>
    </div>
)
}

export default AddToCart