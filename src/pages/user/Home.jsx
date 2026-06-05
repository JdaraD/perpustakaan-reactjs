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

function NewRelease() {
  const kotak = [];
  for (let i = 0; i < 10; i++) {
    kotak.push(
      <div
        key={i}
        className="flex flex-col bg-white rounded-md shadow-lg overflow-hidden"
      >
        <div className="flex justify-center items-center bg-red-400">
          <div className="w-36 h-40 bg-amber-300"></div>
        </div>

        <div className="flex flex-col items-center gap-2 p-4">
          <div className="text-center text-gray-800">
            <p>Harry Potter</p>
            <p>2019</p>
            <p>Charles</p>
          </div>

          <button className="bg-amber-500 text-xs font-bold text-white py-1 px-4 rounded-md hover:bg-amber-600">
            View Details
          </button>
        </div>
      </div>,
    );
  }
  return kotak;
}

const Home = () => {
  return (
    <div className="flex flex-col h-auto py-4 w-full items-center gap-4">
      <div className="flex w-[90%]">
        <div className="flex w-full h-full shadow-lg overflow-hidden">
          <div className="w-[44%] h-86 bg-amber-600 rounded-l-md shadow-lg p-6 flex flex-col gap-4 justify-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to BookVerse, your ultimate destination for all things
              books!
            </h1>
            <p className="capitalize text-justify text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library, took a 1914 Cicero
              translation and scrambled it to make dummy text for Letraset's
              Body Type sheets. It has survived not only many decades, but also
              the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised thanks to these sheets and more
              recently with desktop publishing software including versions of
              Lorem Ipsum.
            </p>
          </div>
          <img
            src={image}
            alt="Background"
            className="w-[56%] h-86 object-cover rounded-r-md shadow-lg"
          />
        </div>
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

      <div className="flex flex-col w-full items-center gap-6">
        <div className="flex w-[90%] h-auto items-center justify-start">
          <h2 className="text-xl font-bold">New Release</h2>
        </div>
        <div className="flex flex-col w-[90%] h-300 p-4 gap-4 bg-gray-200 rounded-md shadow-lg">
          <div className="flex w-full h-20 bg-amber-600 rounded-md"></div>
          <div className="flex w-full h-full gap-4">
            <div className="flex-1 bg-blue-300 rounded-md p-4 overflow-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-6 gap-4">
                {NewRelease()}
                {/* <div className="flex flex-col bg-white rounded-md shadow-lg overflow-hidden">
                  <div className="flex justify-center items-center bg-red-400">
                    <div className="w-36 h-40 bg-amber-300"></div>
                  </div>

                  <div className="flex flex-col items-center gap-2 p-4">
                    <div className="text-center text-gray-800">
                      <p>Harry Potter</p>
                      <p>2019</p>
                      <p>Charles</p>
                    </div>

                    <button className="bg-amber-500 text-xs font-bold text-white py-1 px-4 rounded-md hover:bg-amber-600">
                      View Details
                    </button>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-20 h-100 bg-purple-300 rounded-md"></div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
