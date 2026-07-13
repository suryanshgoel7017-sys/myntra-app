import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home setCartCount={setCartCount} />
    </>
  );
}

export default App;