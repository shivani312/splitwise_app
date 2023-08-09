import { ADD_EXPENSE } from "./actionTypes";

export const addExpense = (expense: any) => {
  return {
    type: ADD_EXPENSE,
    payload: expense,
  }
}
