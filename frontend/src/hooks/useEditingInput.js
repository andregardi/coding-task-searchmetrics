import { useState, useRef, useEffect } from 'react';

const useEditingInput = () => {
  const [isEditing, setEditing] = useState(false);
  const startEditing = () => setEditing(true);
  const stoptEditing = () => setEditing(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  return { isEditing, inputRef, startEditing, stoptEditing };
};

export default useEditingInput;
