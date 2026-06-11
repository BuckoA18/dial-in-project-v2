import React, { useEffect } from "react";

const Popup = () => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("timer started");
    }, 2000);
    return clearTimeout(timerId);
  });

  return <div>Popup</div>;
};

export default Popup;
