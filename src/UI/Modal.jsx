import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

/*el uso de portal significa que se pueden renderizar un componente en una parte especifica
el primer parametro en createPortal es el componente a utilizar

el segundo es donde sera  dibujado

utilizamos un useRef para poder manejar  el dialog. 
*/

export default function Modal({ children, open, className = '' , onClose }) {
    const dialog = useRef();


    // useEffect(() => {
    //     return () => {
    //     }
    // }, []);
    
    
    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            
            modal.showModal();
        }
 
        
        const keyDownHandler = event => {
            // console.log('Key pressed: ', event.key);
            if (event.key === 'Escape') {
                // open = null;
                modal.close();
            }
        }
        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
            modal.close();
        }

    }, [open]);



    return createPortal(
        <dialog
            ref={dialog}
            onClose={onClose}
            className={`modal ${className}`

        }
        >
            {children}</dialog>,
        document.getElementById('modal')
    );
}