import { Link } from "react-router-dom";
import "./FeaturedProduct.css";

const FeaturedProduct = ({ shoe, price, name }) => {
  return (
    <Link to="#" className="featured__item">
      <img src={shoe} alt="" className="featured__img" />
      <p className="featured__details">
        <span className="price">${price}</span>
        {name}
      </p>
    </Link>
  );
};

export default FeaturedProduct;
