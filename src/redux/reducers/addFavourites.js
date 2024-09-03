export const addFavourite = (company) => ({
  type: "ADD_FAVOURITE",
  payload: company,
});

const initialState = [];

export const addFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state, action.payload];
    default:
      return state;
  }
};
