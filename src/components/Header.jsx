import logoImg from '../assets/logo.jpg'
import Button from './Button'
export default function Header() {
    return (<header id="main-header">
        <div id="title">
            <img src={logoImg} alt='Restaurant tacos' />
            <h1>Tacos React</h1>
        </div>
        <nav>
            {/* <button>Cart (0)</button> */}
            <Button
                className="main-header button"                 
                type="button"  
                textOnly
            >
                Cart (0)
                </Button>
        </nav>
    </header>
    )
}