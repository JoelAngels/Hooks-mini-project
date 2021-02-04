import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  //make piece of state based off the value in localstorage or default
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  //use Use effect syncs to locastorage whenever state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, dispatch];
}
//if there is nothing under the localstorage key we will use the default value
export { useLocalStorageReducer };
//create piece of state and everytime it changes it updates local storage
