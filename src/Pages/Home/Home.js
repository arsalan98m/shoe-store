import "./Home.css";

import shoe1 from "../../img/shoe-4.png";
import shoe2 from "../../img/shoe-5.png";
import shoe3 from "../../img/shoe-6.png";

// feature product component
import FeaturedProduct from "../../Components/FeaturedProducts/FeaturedProducts";
const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="container spacing">
          <h1 className="primary-title">Amazing shoes at an amazing price</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam
            perspiciatis facilis beatae laudantium quidem enim sit sequi!
          </p>
          <span className="btnHome btn-warning text-white">
            See what we have
          </span>
        </div>
      </header>

      <main>
        <section className="featured">
          <div className="container">
            <h2 className="section-title">Featured products</h2>
            <div className="split">
              <FeaturedProduct shoe={shoe1} name={"abc"} price={99} />
              <FeaturedProduct shoe={shoe2} name={"abc"} price={119} />
              <FeaturedProduct shoe={shoe3} name={"abc"} price={28} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
