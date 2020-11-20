import React from "react";

export const Num = ({ resource }) => {
  const n = resource.num.read();
  return <h1>your random number is: {n}</h1>;
};
