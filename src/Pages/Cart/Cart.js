import CartItem from "../../Components/CartItem/CartItem";
import { useGlobalContext } from "../../GlobalState/GlobalState";
import "./Cart.css";
const Cart = () => {
  const { cart, totalAmount, clearCart } = useGlobalContext();

  if (cart.length === 0) {
    return <h1 className="text-center my-5">Cart is Empty</h1>;
  }

  return (
    <>
      <div className="container">
        <div className="modal-dialog modal-lg modal-dialog-centered row">
          <div className="modal-content col-md-12">
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title" id="exampleModalLabel">
                Your Shopping Cart
              </h5>
            </div>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" />
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((cartItem) => (
                    <CartItem {...cartItem} key={cartItem.id} />
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <h5>
                  Total:{" "}
                  <span className="price text-success">${totalAmount}</span>
                </h5>
              </div>
            </div>
            <div className="modal-footer border-top-0 d-flex justify-content-end">
              <button type="button" className="btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button type="button" className="btn">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
