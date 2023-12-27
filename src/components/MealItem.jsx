import { useEffect, useState, useContext } from 'react'
import { FetchImage } from '../Https'
import Button from './Button.jsx';
import { currencyFormatter } from '../util/formatting.js'
import  CartContext  from '../store/CartContext.jsx';

export default function MealItem({ meal }) {
    //para usar context necesario pasar el context creado
    //cartCtx ser la referencia a usar en componente.
    const cartCtx =useContext(CartContext);
    const [blobImage, setBlobImage] = useState();

    async function _getImage(imageFromAPI) {
        const reponseImage = await FetchImage(imageFromAPI);
        console.log('imageFromAPI ', reponseImage);
        setBlobImage(reponseImage);
    }

    const handleAddMealToCart = (e) => {

        cartCtx.addItem(meal);
    }

    return <li className="meal-item">
        <article>
            {/* <img src={blobImage} alt={meal.name} /> */}
            <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                <p className="meal-item-descripition" > {meal.description}  </p>
            </div>
            <div className="meal-item-actions">                
                <Button
                    type="button"
                    onClick={(e) => handleAddMealToCart(e)}
                    className="meal-item" >Add to Cart.</Button>
            </div>
        </article>
    </li>
}