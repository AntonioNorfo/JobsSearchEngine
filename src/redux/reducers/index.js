import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import { searchResultsReducer } from "./searchResults";

const rootReducer = combineReducers({
  favourites: favoritesReducer,
  searchResults: searchResultsReducer,
});

export default rootReducer;
