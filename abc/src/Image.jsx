import React from "react";

const Image = () => {
  return (
    <div onClick={handleChange(d)}>
      <img src={d.src} alt={d.alt} />
    </div>
  );
};

export default Image;
