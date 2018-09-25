import { ADD } from "../constants/action";

export const add = todo => ({
  type: ADD,
  payload: {
    value: todo
  }
});
