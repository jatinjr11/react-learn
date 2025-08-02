import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus(); // 👈 Directly access the input DOM node
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}

export default InputFocus;