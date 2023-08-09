// expenseReducer.js

import { ADD_EXPENSE } from "./actionTypes";

const expenseReducer = (state = [], action: any) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return action.payload
    default:
      return state;
  }
};

export default expenseReducer;
