import "./Productscard.css";
function Productscard(props){
  return (<div className="product">
    <h3>{props.name}</h3>
    <h3>₹{props.price}</h3>
    <p>⭐ {props.rating}</p>

    <button>Add To Cart</button>

  </div>
  );
}
export default Productscard;