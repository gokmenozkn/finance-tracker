import { createContext, useReducer, useEffect } from "react";

import reducer from "./reducer";

export const AppContext = createContext();

const initialState = {
  item: JSON.parse(localStorage.getItem("item")) || []
}

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(state.item));
  }, [state]);

  const value = {
    state,
    dispatch,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}