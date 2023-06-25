import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-white p-8 max-w-[90rem] max-h-[90vh] gap-4 w-screen h-screen grid grid-cols-13 grid-rows-12 bg-black">
        {children}
      </div>
    </div>
  );
}