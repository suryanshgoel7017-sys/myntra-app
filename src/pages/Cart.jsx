function Cart({ cartItems }) {

  return (

    <>

      <h2>My Cart</h2>

      {

        cartItems.map((item)=>{

          return(

            <div key={item.id}>

              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

            </div>

          )

        })

      }

    </>
  );
}

export default Cart;