import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../GlobalState/GlobalState";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { id } = useParams();
  id = Number(id);
  const { data } = useGlobalContext();
  const shoe = data.filter((product) => product.id === id);

  const { name, img, desc, price } = shoe[0];

  return (
    <>
      <div className="outer">
        <div className="center-wrapper">
          <div className="container-fluid content">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 shoe-slider">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={img} className="d-block w-100" alt={name} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 shoe-content">
                <div className="text1">
                  <span>{name}</span>
                  <span>{desc.slice(0, 20)}</span>
                </div>
                <div className="text2">$ {price}</div>
                <div className="text3">{name}</div>
                <div className="text4">DESCRIPTION</div>
                <div className="text5">{desc}</div>
                <div className="btn-wrapper">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
