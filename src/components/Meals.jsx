
import { FetchMeals, FetchImage } from '../Https'
import MealItem from './MealItem';
import Error from './Error.jsx'
import useHttp from '../hooks/useHttp';


/*
sta linea queda fuera del componente debido aque si lo hacemos de este modo
 useHttp('http://localhost:3000/meals', {}, [])
 {} --> tomara como un objeto nuevo y sera un bucle infinito


*/
let _config = {};

export default function Meals() {


    const {
        data: loadedMeals,
        isLoading,
        error } = useHttp('http://localhost:3000/meals', _config, [])

    // ordenar  alfabeticamente de a-z
    // function mFetchMealsEffect() {
    //     FetchMeals().then(reponseJson => {
    //         let orderArray = reponseJson.sort((a, b) => (a.name > b.name ? 1 : -1));
    //         setLoadedMeals(orderArray);
    //     });
    // }

    // function mFetchMealsEffect() {
    //     FetchMeals().then(reponseJson => {
    //         let orderArray = reponseJson.sort((a, b) => (a.name > b.name ? 1 : -1));
    //         setLoadedMeals(orderArray);
    //     });
    // }
    // useEffect(() => mFetchMealsEffect, []);



    //antes de tener un custom element 
    // let listOrered = loadedMeals.map(mealCurrent =>
    //     <li key={mealCurrent.id}>
    //         {mealCurrent.name}
    //     </li>)


    console.log(loadedMeals)

    if (isLoading) {
        return <p className="center">fetching meals...</p>
    }

    if (error) {

        return <Error title="Failed to fetch meals" message={error} />
    }



    return (
        <ul id="meals">
            {loadedMeals.map(mealCurrent =>
                <MealItem meal={mealCurrent} key={mealCurrent.id} />)}
        </ul>
    )
}