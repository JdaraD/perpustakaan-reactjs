import React from "react";

import image from "../../../public/img/background.jpg";

function kotakPerulangan() {
  const kotak = [];
  for (let i = 0; i < 5; i++) {
    kotak.push(
      <div
        key={i}
        className="flex w-68 h-24 bg-green-500 gap-2 shadow-lg rounded-md p-2"
      >
        <div className="relative flex justify-center items-center w-1/2 rounded-md bg-amber-400">
          <div className="absolute w-18 h-24 bottom-2 rounded-md shadow-xl bg-red-400"></div>
        </div>

        <div className="flex w-1/2 rounded-md bg-blue-400">
          <ul className="list-disc flex flex-col justify-center pl-5 text-white text-sm">
            <li>Harry Potter</li>
            <li>2019</li>
            <li>Charles</li>
          </ul>
        </div>
      </div>,
    );
  }
  return kotak;
}

const Home = () => {
  return (
    <div className="flex flex-col h-200 w-full items-center gap-4">
      <div className="flex w-[90%] pt-4 rounded-md overflow-hidden">
        <img
          src={image}
          alt="Background"
          className="w-full h-86 object-cover rounded-md shadow-lg "
        />
      </div>
      <div className="flex flex-col w-full items-center gap-6">
        <div className="flex w-[90%] h-auto items-center justify-start">
          <h2 className="text-xl font-bold">Most viewed</h2>
        </div>
        <div className="flex w-[90%] h-auto gap-4 bg-gray-200 rounded-md shadow-lg">
          {kotakPerulangan()}
          {/* <div className="flex w-68 h-24 bg-green-500 gap-2 shadow-lg rounded-md p-2">
            <div className="relative flex justify-center items-center w-1/2 rounded-md bg-amber-400">
              <div className="absolute w-18 h-24 bottom-2 rounded-md shadow-xl bg-red-400"></div>
            </div>

            <div className="flex w-1/2 rounded-md bg-blue-400">
              <ul className="list-disc flex flex-col justify-center pl-5 text-white text-sm">
                <li>Harry Potter</li>
                <li>2019</li>
                <li>Charles</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
