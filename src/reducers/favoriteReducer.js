
import { ADD_FAVORITE,} from "../actions/favoritesActions";
import { REMOVE_FAVORITE, } from "../actions/favoritesActions";
import { TOGGLE_FAVORITES } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            };
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE: 
            return {
                ...state,
                favorites: state.favorites.filter(item=>(item.id!==action.payload))
            }   
        default:
            return state;
    }
}

export default favoriteReducer;