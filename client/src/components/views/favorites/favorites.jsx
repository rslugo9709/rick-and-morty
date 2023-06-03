

import {useDispatch, useSelector} from "react-redux";
import { filterCards, orderCards, reset } from "../../../redux/actions";
import Cards from "../../blocks/cards/cards.jsx";


export default function Favorites(){

    const dispatch = useDispatch();

    //Allows you to extract data from the Redux store state, using a selector function.
    const favorites = useSelector((state) => state.myFavorites)

    function handleSort(e){
        dispatch(orderCards(e.target.value))
    }

    function handleFilter(e){
        dispatch(filterCards(e.target.value));
    }

    function handleReset(e){
        dispatch(reset);
    }
    
    console.log("se renderiza el componente favoritos")
    console.log(favorites)
    return(
        //esto se puede cambiar 
        <div>
            <select placeholder="Gender" onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknow">Unknow</option>
            </select>

            <select placeholder="Order" onChange={handleSort}>
                <option value="Ascendente">
                    Ascendente
                </option>

                <option value="Descendente" >
                    Descendente
                </option>
            </select>

            <button value="reset" onClick={handleReset}>
                Reset
            </button>

            <Cards characters={favorites} />
        </div>
    )



}