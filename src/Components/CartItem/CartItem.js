import { AiFillDelete } from "react-icons/ai";
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";
import { useGlobalContext } from "../../GlobalState/GlobalState";

const CartItem = ({ id, name, img, price, totalItem, desc }) => {
  const { remove, increase, decrease } = useGlobalContext();
  return (
    <tr>
      <td className="w-25">
        <img src={img} className="img-fluid img-thumbnail" alt="Sheep" />
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td className="qty d-flex justify-content-between align-items-center">
        <button className="increase mx-2" onClick={() => decrease(id)}>
          {" "}
          <BsDashSquare />
        </button>
        <span>{totalItem}</span>
        <button className="decrease mx-2" onClick={() => increase(id)}>
          <BsPlusSquare />
        </button>
      </td>
      <td>${price * totalItem}</td>
      <td>
        <button className="btn btn-danger" onClick={() => remove(id)}>
          <AiFillDelete />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
