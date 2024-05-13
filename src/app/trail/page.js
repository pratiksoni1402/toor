'use client'
import React, { useRef, useEffect } from "react";
function App() {
  const inputRef = useRef(null);
  inputRef.current?.focus();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <label>
      Name: <input ref={inputRef} />
    </label>
  )
}

export default App