import "./Productscard.css";
function Productscard({
   name,

  price,

  rating,

  addToCart
})
{

  return (<div className="product">
    <h3>{name}</h3>
    <h3>₹{price}</h3>
    <p>⭐ {rating}</p>

    <button  onClick={addToCart}>Add To Cart</button>

  </div>
  );
}
export default Productscard;