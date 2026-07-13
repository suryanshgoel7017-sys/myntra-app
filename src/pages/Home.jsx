import Banner from "../components/Banner";
import Categorycard from "../components/Categorycard";

function Home() {
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
    </>
  );
}

export default Home;
