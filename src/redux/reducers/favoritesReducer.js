export const addFavourite = (company) => ({
  type: "ADD_FAVOURITE",
  payload: company,
});

export const removeFavourite = (company) => ({
  type: "REMOVE_FAVOURITE",
  payload: company,
});

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state, action.payload];
    case "REMOVE_FAVOURITE":
      return state.filter((company) => company !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
