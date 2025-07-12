
import React, { useEffect, useRef } from 'react';

export default function Assignment1() {
  // useRef creates a persistent reference to the input DOM element
  const inputRef = useRef();

  // useEffect runs once after the component mounts (empty dependency array)
  // Automatically focuses the input when the component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Function to focus the input when the button is clicked
  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Link the input element to the ref so we can directly interact with the DOM */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter something here"
      />

      {/* Clicking this button will focus the input field */}
      <button onClick={handleButtonClick}>Focus input</button>
    </div>
  );
}


// learnings
Reference and focus an input field when the component mounts

Re-focus the input when a button is clicked
Great for cases where direct DOM manipulation is needed without re-rendering.
