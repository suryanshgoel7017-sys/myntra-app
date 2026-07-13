import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav>
      <h2>Myntra Clone</h2>

      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Home</li>
        <li>Beauty</li>
      </ul>

      <h3>🛒 Cart ({cartCount})</h3>
    </nav>
  );
}

export default Navbar;