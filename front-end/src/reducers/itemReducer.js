import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
import carService from "../services/cars";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
