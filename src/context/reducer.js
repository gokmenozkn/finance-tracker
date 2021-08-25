import * as types from "./types";

export default function reducer(state, action) {
  switch (action.type) {
    case types.ADD:
      return {
        item: [
          ...state.item,
          action.item
        ]
      }
    case types.REMOVE:
      return {
        item: state.item.filter(i => i.id !== action.id)
      }
    default:
      throw new Error();
  }
}