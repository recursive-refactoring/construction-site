import { FaCartShopping, FaX } from "react-icons/fa6"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeToCart } from "../../../redux/addToCartSlice"

const ShopCart = () => {
    const { products } = useSelector((state) => state.addToCart)
    const totalPrice = products.reduce((total, product) => total + product?.finalPrice * product?.quantity, 0);
    const totalProduct = products.reduce((total, product) => total + product?.quantity, 0);

    return (
        <li className="menu_cart">
            <i><FaCartShopping /> <span>{totalProduct}</span> </i>
            <ul className="menu_cart_items d-none d-lg-block">
                {products.map(({id, finalPrice, thumbnail, quantity})=> <Card key={id} id={id} price={finalPrice * quantity} thumbnail={thumbnail} />)}
                <li className="py-3 justify-content-end">
                    <span>Total = ${totalPrice}</span>
                </li>
                <li><Link className="checkout_btn" to="/checkout">Checkout</Link></li>
            </ul>
        </li>
    )
}
export default ShopCart

const Card = ({id, price, thumbnail }) => {
    const dispatch = useDispatch()
    return (
        <li className="bor-bottom me-0">
            <div className="image">
                <img src={thumbnail} alt="image" />
            </div>
            <span>${price}</span>
            <button onClick={() => dispatch(removeToCart(id))} className="fa-solid fa-x"><FaX/></button>
        </li>
    )
}