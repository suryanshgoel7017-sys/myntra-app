import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
   function removeFromCart(id) {
    setCartItems(
      cartItems.filter((item) => {
        return item.id !== id;
      })
    );
  }


  return (
  <>
      <Navbar cartCount={cartItems.length} />

      <Home
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

export default App;