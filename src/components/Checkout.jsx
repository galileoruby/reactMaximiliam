import { useContext } from "react";
import Modal from "../UI/Modal";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./Button";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "../UI/Input";
import { Orders } from '../Https';
import useHttp from "../hooks/useHttp";
import Error from './Error.jsx'

const configRquest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function checkout() {
    const userProgressCtx = useContext(UserProgressContext);
    const cartCtx = useContext(CartContext)


    const {
        data,
        isLoading: isSending,
        error,
        sendRequest,
        clearData
    } = useHttp('http://localhost:3000/orders', configRquest)

    const handleCloseCheckout = () => {
        userProgressCtx.hideCheckout();
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearItem();
        clearData();
    }

    const cartTotal = cartCtx.items.reduce(
        (totaPrice, item) => totaPrice + item.quantity * item.price
        , 0);

    const handleSubmission = (evt) => {
        evt.preventDefault();


        const fd = new FormData(evt.target);
        const customerData = Object.fromEntries(fd.entries());



        sendRequest(
            JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        );

    }

    let actions = (
        <>
            <Button textOnly onClick={handleCloseCheckout} > Close </Button>
            <Button > Submit the Order </Button>
        </>
    );

    if (isSending) {
        actions = <span>sending order data...</span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleCloseCheckout}>
            <h2>Sucess!!</h2>
            <p>                Your order was submitted successfully!!!</p>
            <p>
                We will get back with more details via email within the next minutes
            </p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>Okay</Button>
            </p>

        </Modal>
    }

   


    return <Modal
        className="modal"
        open={userProgressCtx.progress === 'checkout'}
        onClose={(evt) => handleCloseCheckout(evt)}
    >

        <form onSubmit={handleSubmission}>

            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
            <Input label="Full Name" type="text" id="name" />
            <Input label="Email Adress" type="text" id="email" />
            <Input label="Street" type="text" id="street" />

            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>
            {error && <Error title="Failed to submit order" message={error} />}
            <p className="modal-actions">{actions}</p>
        </form>
    </Modal>
}