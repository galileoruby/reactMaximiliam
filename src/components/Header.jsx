import { useContext, useState } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './Button'
import CartContext from '../store/CartContext.jsx'
import Cart from './Cart.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'

export default function Header() {
    // const [showDialog, setShowDiallog] = useState(false);
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);



    const totalCartItems = cartCtx.items.reduce(
        (totalNumberOfItems, item) => {
            return totalNumberOfItems + item.quantity;
        }, 0);


    function handleShowCart() {
        userProgressCtx.showCart();
    }


    return (<header id="main-header">
        <div id="title">
            <img src={logoImg} alt='Restaurant tacos' />
            <h1>Tacos React</h1>
        </div>
        <nav>
            <Button
                className="main-header button"
                type="button"
                textOnly
                onClick={handleShowCart}
            >
                Cart ({totalCartItems})
            </Button>
        </nav>
        {/* {showDialog &&
            <Cart open={showDialog} />

        } */}
    </header>
    )
}