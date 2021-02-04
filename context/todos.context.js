//Context that is going to keep track of our todos
//all methods that interact with todos
import React, { createContext } from "react";
import todoReducer from "../reducers/todo.reducer.js";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Finish the React specificly", completed: false },
  {
    id: 2,
    task: "Go through the Context-Api",
    completed: false,
  },
];
//HAPA NDIO TABIA YA CONTEXT ILIANZA, SASA UKITAKA KITU KUTOKA KWA HII CONTEXT UNAFAA KUZIIMPORT KWA PLACE UNAITAKA
export const TodosContext = createContext();
export const DispatchContext = createContext();
export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
//all our componenets are consuming TodosContext which is not good, too many rerenders which we wanna avoid and that is where the reducer comes in
