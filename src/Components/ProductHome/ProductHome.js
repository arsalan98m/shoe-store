import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../GlobalState/GlobalState";
import "./ProductHome.css";

const ProductHome = () => {
  const { data, addToCart } = useGlobalContext();

  return (
    <>
      <section className="product__list">
        {data.map(({ name, img, id, price }) => {
          return (
            <div className="product" key={id}>
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <h4 style={{ textAlign: "right", marginTop: "2rem" }}>
                ${price}
              </h4>
              <h4
                style={{
                  color: "#617d98",
                  fontSize: "0.75rem",
                  marginTop: "0.45rem",
                  marginBottom: "2rem",
                }}
              >
                Lorem ipsum dolor sit amet consectetur.
              </h4>

              <div className="product__button">
                <Link to={`productDetail/${id}`}>
                  <button className="product__infoBtn">More info</button>
                </Link>
                <button
                  className="product__cartBtn"
                  onClick={() => addToCart(id)}
                >
                  <GiShoppingCart />
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductHome;
