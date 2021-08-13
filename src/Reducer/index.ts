/**
 * Implementation of Reducer to maintain Redux store
 */

import * as ActionType from "../Actions";
import { serviceName } from "../Utils/requests";
import { IJokes, IActionType } from "../Interfaces/initialState";

// initialization of Redux store
const initialState: IJokes = {
  isLoading: false,
  jokesData: [{ id: "1", joke: "No Jokes Found" }],
  currentPage: 0,
  totalPages: 0,
  errorMessage: "",
}

const reducer = (state: IJokes = initialState, action: IActionType): IJokes => {
  switch (action.type) {
    case ActionType.FETCH_SUCCESS: {
      // condition to check which store object needs to update based on service name
      if (action.requestInfo === serviceName.search) {
        const { results, current_page, total_pages } = action.response;
        return {
          ...state,
          jokesData: results,
          currentPage: current_page,
          totalPages: total_pages,
          isLoading: false,
        };
      }
      break;
    }
    case ActionType.FETCH_FAILED: {
      return {
        ...state,
        errorMessage: action.response,
        isLoading: false,
      };
    }
    case ActionType.FETCH_PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    default:
      return state;
  }
  return state;
};

export default reducer;
