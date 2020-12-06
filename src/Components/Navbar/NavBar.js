import { Nav, Navbar } from "react-bootstrap";
import { Link, useResolvedPath } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGlobalContext } from "../../GlobalState/GlobalState";
import "./NavBar.css";

const NavBar = ({ location }) => {
  const { cartItem } = useGlobalContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Link to="/">
        <Navbar.Brand>Shoe Store</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Navbar.Brand
              className={
                useResolvedPath("/").pathname === location.pathname
                  ? "link__active"
                  : ""
              }
            >
              {" "}
              Home
            </Navbar.Brand>
          </Link>

          <Link to="products">
            {" "}
            <Navbar.Brand
              className={
                useResolvedPath("/products").pathname === location.pathname
                  ? "link__active"
                  : ""
              }
            >
              Product
            </Navbar.Brand>
          </Link>

          <Link to="about">
            {" "}
            <Navbar.Brand
              className={
                useResolvedPath("/about").pathname === location.pathname
                  ? "link__active"
                  : ""
              }
            >
              About
            </Navbar.Brand>
          </Link>
        </Nav>

        <Nav>
          <Link to="cart">
            <Navbar.Brand>
              <AiOutlineShoppingCart /> {cartItem}
            </Navbar.Brand>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
