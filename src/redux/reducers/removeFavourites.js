export const removeFavourite = (company) => ({
  type: "REMOVE_FAVOURITE",
  payload: company,
});

const initialState = [];

export const removeFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_FAVOURITE":
      return state.filter((company) => company !== action.payload);
    default:
      return state;
  }
};
