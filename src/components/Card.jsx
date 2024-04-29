import React from "react";
import image from "../assets/images/sampleimage.jpg";

export const CardInput = ({ app }) => {
  return (
    <a className="w-72 rounded-md overflow-hidden" href={app.url}>
      <div className="rounded rounded-md bg-primary" >
        <img
          className="w-full rounded-lg p-1 h-32 object-cover "
          src={image}
          alt="App Image"
        />
      </div>
      
      <div className="m-auto mt-2 py-4">
        <div className="font-bold text-xl mb-2 hover:text-primary">{app.nombre}</div>
        <p className="text-gray-700 text-base">
          {app.descripcion}
        </p>
      </div>
    </a>
  );
};
