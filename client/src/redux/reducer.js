import { ADD_TO_FAVORITES, REMOVE_FAVORITE, FILTER_CARDS, ORDER_CARDS, RESET } from "./actions";

let initialState = {
    allCharacters: [],
    myFavorites: []
}


function reducer(state= initialState, action){

    switch(action.type){
        case ADD_TO_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        
        case REMOVE_FAVORITE:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }

        case FILTER_CARDS:
            return{
                ...state,
                myFavorites: state.allCharacters.filter(
                    (char) => char.gender === action.payload
                )
            }

        case ORDER_CARDS:
            //CAMBIAR ESTO
            let ordenados = [];
            if (action.payload === "Ascendente") {
              ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else {
              ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
            }
            return {
              ...state,
              myFavorites: [...ordenados],
            };
        
        case RESET:
            
            return{
                    ...state,
                    myFavorites: state.allCharacters
                }
        default:
            return{
                ...state
            }
    }


}


export default reducer;