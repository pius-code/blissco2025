import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-amber-200 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold underline my-4">
        Welcome To BlissCo 2025
      </h1>
      <p className="text-lg">
        This is BlissCollege computer science and ICT students{" "}
      </p>

      <img src="/blissCo.jpg" />
    </div>
  );
};

export default page;
