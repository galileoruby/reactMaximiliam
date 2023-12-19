import { createContext, useReducer } from "react";

//leo: agregar aqui las propiedades que navegaran en a aplicacion, inculir funciones
const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { }
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        //bad idea 
        // state.items.push(action.item);

        //buscar indice especifico para encontrar item respectivo.
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        //crear nuevo elemento.. en lugar de hacer un push
        const updatedItems = [...state.items];


        if (existingCartItemIndex > -1) {
            const existingItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...state.items[existingCartItemIndex],
                quantity: existingItem.quantity + 1
            };

            updatedItems[existingCartItemIndex] = updatedItem;

        } else {
            updatedItems.push({ ...action.item, quantity: 1 });

        }

        return {
            ...state,
            items: updatedItems
        };
    }

    if (action.type === 'REMOVE_ITEM') {

        //buscar indice especifico para encontrar item respectivo.
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];

        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            };

            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems
        };


    }

    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCarAction] = useReducer(cartReducer, { items: [] });

    const cartContext = {
        items: cart.items
    };


    function addItem() { }

    function removeItem() { }

    //value almacena info a ser enviada a  CartContext.Provider
    //pueen ser fn, arreglo, objetos ...
    return <CartContext.Provider value={cartContext}> {children} </CartContext.Provider>
}

export default CartContext;