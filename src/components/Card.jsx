import React from "react";

export const CardInput = () => {
  return (
    <div className="w-72 rounded-md overflow-hidden">
      <div className="rounded rounded-md bg-primary" >
        <img
          className="w-full rounded-lg p-1 h-32 object-cover "
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Sunset in the mountains"
        />
      </div>
      
      <div className="m-auto mt-2 py-4">
        <div className="font-bold text-xl mb-2 hover:text-primary">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
};
