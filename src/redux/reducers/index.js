import { combineReducers } from "redux";
import { addFavouriteReducer } from "./addFavourites";
import { removeFavouriteReducer } from "./removeFavourites";

const rootReducer = combineReducers({
  favourites: addFavouriteReducer,
  removeFavourites: removeFavouriteReducer,
});

export default rootReducer;
