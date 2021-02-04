import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  //make piece of state based off the value in localstorage or default
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  //use Use effect o update local storage whenever the piece of state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
//if there is nothing under the localstorage key we will use the default value
export default useLocalStorageState;
//create piece of state and everytime it changes it updates local storage
