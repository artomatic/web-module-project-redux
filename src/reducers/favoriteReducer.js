
import { addFavorite, ADD_FAVORITE } from "../actions/favoritesActions";
import { removeFavorite, REMOVE_FAVORITE } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: true,
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        // case (ADD_FAVORITE):
        //     return {

        //     }
        default:
            return state;
    }
}

export default favoriteReducer;