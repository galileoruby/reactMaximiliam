import { useState, useEffect } from 'react';
import { FetchMeals, FetchImage } from '../Https'
import MealItem from './MealItem';

export default function Meals() {

    const [loadedMeals, setLoadedMeals] = useState([]);

    // function mFetchMealsEffect() {
    //     FetchMeals().then(reponseJson => {
    //         let orderArray = reponseJson.sort((a, b) => (a.name > b.name ? 1 : -1));
    //         setLoadedMeals(orderArray);
    //     });
    // }

    function mFetchMealsEffect() {
        FetchMeals().then(reponseJson => {
            let orderArray = reponseJson.sort((a, b) => (a.name > b.name ? 1 : -1));
            setLoadedMeals(orderArray);
        });
    }

    useEffect(() => mFetchMealsEffect, []);


    // let listOrered = loadedMeals.map(mealCurrent =>
    //     <li key={mealCurrent.id}>
    //         {mealCurrent.name}
    //     </li>)

    let listOrered = loadedMeals.map(mealCurrent =>
        <MealItem meal={mealCurrent} key={mealCurrent.id} />)

    return (
        <ul id="meals">
            {listOrered}
        </ul>
    )
}