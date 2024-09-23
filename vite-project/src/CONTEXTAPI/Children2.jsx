import React from "react";
import  { ContextAPI } from "./MyContext";

const Children2 = () => {
  return (
    <ContextAPI.Consumer>
      {({ phone, address }) => {
        return (
          <div>
            <h3>Phone: {phone}</h3>
            <h3>Address: {address}</h3>
          </div>
        );
      }}
    </ContextAPI.Consumer>
  );
};

export default Children2;
