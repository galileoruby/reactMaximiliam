import { createContext, useState } from "react";


/*
Otra creacion de contexto.
1.
Crear contexto : incluir funciones y variabes necesarias para manipular estado

*/

//dummy initial value
const UserProgressContext = createContext({
    progress: '', // cart, checkout,
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
})


/**
 * 2. Crear una funcion para exportar el provider
 * incluir e xx.Provider y meter {children} que anidara todo lo necesario
 * 
 * 
*/
export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }
    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout')
    }

    function hideCheckout() {
        setUserProgress('')
    }

    //aqui se enlazan lals funciones implementadas en el reducer con el equivalente
    //en el context
    const userContextProgress = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }



    return <UserProgressContext.Provider value={userContextProgress}>
        {children}
    </UserProgressContext.Provider>
}



export default UserProgressContext;