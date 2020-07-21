import { useState } from "react";

function useInput(initalValue) {
  const [value, setValue] = useState(initalValue);
  const bind = {
      value,
      onChange: e => {
          setValue(e.target.value)
      }
  }
  const reset = () => {
    setValue(initalValue)
  }

  return[value, bind, reset, setValue]
}

export default useInput;
