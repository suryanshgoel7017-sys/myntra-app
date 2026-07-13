import Banner from "../components/Banner";
import Categorycard from "../components/Categorycard";
import Productscard from "../components/Productscard";
import products from "../data/products";

function Home({ setCartCount }) {

  function addToCart() {
    setCartCount((previousCount) => previousCount + 1);
  }

  return (
    <>
      <Banner />

      <h2>Shop By Category</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <Categorycard title="Shoes" />
        <Categorycard title="T-Shirts" />
        <Categorycard title="Jeans" />
        <Categorycard title="Watches" />
      </div>

      <h2>Trending Products</h2>

      <div className="products">
        {products.map((item) => (
          <Productscard
            key={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default Home;