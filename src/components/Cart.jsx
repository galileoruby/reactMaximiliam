import { useContext } from "react"
import CartContext from "../store/CartContext"
import Modal from "../UI/Modal";
import Button from "./Button";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";
/*
Uso de context para recuperar items almacenados.
Al declarar const cartCtx = useContext(CartContext);
cartCtx es un listener de los cambios realizados en otro lado y ademas permite modificar cosas dentro del context.
pueden existir context animados
*/
export default function Cart({ ...props }) {
    //Esto funciona como listening al realizar cambios en otros lados
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalItems = cartCtx.items.length;

    const cartTotal = cartCtx.items.reduce(
        (totaPrice, item) => totaPrice + item.quantity * item.price
        , 0);

    const handleCloseCart = () => {
        userProgressCtx.hideCart();
    }

    const handleCheckout = () => {
        userProgressCtx.showCheckout();
    }

    return <Modal
        className="cart"
        open={userProgressCtx.progress === 'cart'}
        onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map(
                item => <CartItem
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                    onIncrease={() => cartCtx.addItem(item)}
                    onDecrease={() => cartCtx.removeItem(item.id)}
                />
            )}
        </ul>

        <p className="cart-total">
            {currencyFormatter.format(cartTotal)}
        </p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}> Close </Button>
            {totalItems > 0 && <Button onClick={handleCheckout} > Go to checkout </Button>}
        </p>



    </Modal>
}