import { combineReducers } from "redux";
import { addFavouriteReducer } from "./addFavourites";
import { removeFavouriteReducer } from "./removeFavourites";
import { searchResultsReducer } from "./searchResults";

const rootReducer = combineReducers({
  favourites: addFavouriteReducer,
  removeFavourites: removeFavouriteReducer,
  searchResults: searchResultsReducer,
});

export default rootReducer;
