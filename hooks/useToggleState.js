import { useState } from "react";

function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);
  const toggle = () => {
    setState(!state);
  };
  //return piece of state and a function to toggle it
  return [state, toggle];
}

export default useToggle;
