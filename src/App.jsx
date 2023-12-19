import Header from "./components/Header";
import Meals from "./components/Meals";

//se declara en el app por ser de ambito global..
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
