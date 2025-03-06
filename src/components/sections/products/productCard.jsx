import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/addToCartSlice";

const ProductCard = ({ id, thumbnail, title, price, discount_price }) => {
  const dispatch = useDispatch();
  const finalPrice = discount_price ? discount_price : price;

  return (
    <div className="item">
      <img src={thumbnail} alt="image" />
      <div className="content">
        <h4 style={{ color: "white" }}>
          <Link to="JavaScript:void(0)">{title}</Link>
        </h4>
        <del style={{ textDecoration: "none" }}>{price}</del>{" "}
      </div>
      {/* <div className="icon">
        <div>
          <i>
            <FaHeart />
          </i>
        </div>
        <div
          onClick={() =>
            dispatch(
              addToCart({ id, quantity: 1, thumbnail, title, finalPrice })
            )
          }
          className="active"
        >
          <i>
            <FaCartShopping />
          </i>
        </div>
      </div> */}
    </div>
  );
};

export default ProductCard;
