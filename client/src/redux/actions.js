import axios from "axios";

//declaramos las acciones para que sean solo de lectura y no puedan ser modificadas
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";
export const RESET = "RESET";


export function addFavorite(character){
    console.log("desde actions se imprime characters")
    console.log(character)
    const url = "http://localhost:3001/rickandmorty/fav";

    return async (dispatch) =>{

        try {
            
            const response = await axios.post(url, character);
            console.log("se agrega a favoritos")
            console.log(response)
            return dispatch({
                type: "ADD_TO_FAVORITES",
                payload: response.data
            })

        } catch (error) {
            console.log(error.message);
        }

    }

}


export function removeFavorite(id){
    console.log("desde remove favorites")
    console.log(id)
    const url = "http://localhost:3001/rickandmorty/fav/" +id;

    return async (dispatch) =>{
        try {
            const response = (await axios.delete(url)).data;
            const a = await axios.delete(url)
            console.log("se elimina de favoritos")
            console.log(a)
            console.log("se imprime la data")
            console.log(a.data)
            return dispatch(
                {
                    type: "REMOVE_FAVORITE",
                    payload: response
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }

}

export function orderCards(order){
    return{
        type: "ORDER_CARDS", 
        payload: order
    }
}

export function filterCards(gender){
    return{
        type: "FILTER_CARDS",
        payload: gender
    }
}

export function reset(){
    return{
        type: "RESET"
    }
}