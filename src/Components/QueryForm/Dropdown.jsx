import React, { useCallback, useEffect } from "react";

export default function Dropdown({
  show,
  setShow,
  children,
  title = "dropdown",
  right = false
}) {
  const sanitizeString = (str) => {
    return str.replace(/[^a-zA-Z0-9-_]/g, '-');
  };

  const handleOutsideClick = useCallback((event) => {
    // Check if the event target is within the sanitized class
    if (!event.target.closest(`.card-${sanitizeString(title)}`)) {
      setShow(false);
    }
  }, [title]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  if (!show) {
    return;
  }
  return (
    <div className={`card-${sanitizeString(title)} absolute bg-primaryBg p-2 rounded-md border border-defaultBtn ${right && 'right-20'}`}>
      {children}
    </div>
  );
}