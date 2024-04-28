import React from "react";
import { CardInput } from "./Card";

export const List = () => {
  return (
      <div className="grid grid-cols-4 gap-16 p-10 justify-items-center">
        {Array.from({ length: 8 }).map((_, index) => (
          <CardInput key={index} />
        ))}
      </div>
  );
};
