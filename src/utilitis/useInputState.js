import { useState } from "react";
const useInputState = () => {
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
};
export {useInputState}
