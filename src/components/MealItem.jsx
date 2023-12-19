import { useEffect, useState } from 'react'
import { FetchImage } from '../Https'
import Button from './Button.jsx';

import { currencyFormatter } from '../util/formatting.js'



export default function MealItem({ meal }) {

    const [blobImage, setBlobImage] = useState();


    async function _getImage(imageFromAPI) {

        const reponseImage = await FetchImage(imageFromAPI);
        console.log('imageFromAPI ', reponseImage);

        //  return reponseImage;
        setBlobImage(reponseImage);

    }

    const handleClicked = (e) => {
        // console.log('clicked me: ', e);
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
                {/* <button>Add to Cart</button> */}
                <Button
                    type="button"
                    onClick={(e) => handleClicked(e)}
                    className="meal-item" >Add to Cart.</Button>
            </div>
        </article>
    </li>
}


//http://localhost:5173/src/assets/logo.jpg