import { Link } from "react-router-dom";

import image from "../../../public/img/background.jpg";

function kotakPerulangan() {
  const kotak = [];
  for (let i = 0; i < 10; i++) {
    kotak.push(
      <Link
        key={i}
        to="/book-details"
        className="shrink-0 flex w-62 h-24 bg-gray-200 gap-2 shadow-lg rounded-md p-2"
      >
        <div className="relative flex justify-center items-center w-1/2 rounded-md">
          <div className="absolute w-18 h-24 bottom-2 rounded-md shadow-xl animate-pulse bg-gray-400"></div>
        </div>

        <div className="flex w-1/2 rounded-md">
          <ul className="list-disc flex flex-col justify-center text-black text-sm">
            <li>Harry Potter</li>
            <li>2019</li>
            <li>Charles</li>
          </ul>
        </div>
      </Link>,
    );
  }
  return kotak;
}

function NewRelease() {
  const kotak = [];
  for (let i = 0; i < 20; i++) {
    kotak.push(
      <div
        key={i}
        className="flex flex-col bg-white animate-pulse rounded-md shadow-lg overflow-hidden"
      >
        <div className="flex justify-center items-center">
          <div className="w-36 h-40 m-2 rounded-md bg-gray-300"></div>
        </div>

        <div className="flex flex-col items-center gap-2 p-2">
          <div className="text-center text-sm text-gray-800">
            <p className="text-base font-bold">Harry Potter</p>
            <p className="text-sm font-semibold">2019</p>
            <p className="text-xs font-normal">Charles</p>
          </div>

          <Link to="/book-details">
            <button
              type="button"
              className="bg-amber-500 text-xs font-bold text-white py-1 px-4 rounded-md hover:bg-amber-600 cursor-pointer"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>,
    );
  }
  return kotak;
}

const Home = () => {
  return (
    <div className="container w-[90%] mx-auto px-4 py-6 flex flex-col gap-8">
      <section className="w-full">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-xl shadow-lg">
          <div className=" w-full lg:w-[45%] bg-amber-600 p-6 lg:p-8 flex flex-col justify-center gap-4 order-2 lg:order-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Welcome to BookVerse, your ultimate destination for all things
              books!
            </h1>

            <p className="text-sm md:text-base text-white text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library, took a 1914 Cicero
              translation and scrambled it to make dummy text for Letraset's
              Body Type sheets.
            </p>
          </div>

          <img
            src={image}
            alt="Background"
            className="w-full lg:w-[55%] h-62.5 md:h-87.5 lg:h-auto object-cover order-1 lg:order-2"
          />
        </div>
      </section>

      <section className="w-full flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-bold">Most Viewed</h2>

        <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto custom-scrollbar">
          <div className="flex gap-4 min-w-max">{kotakPerulangan()}</div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-bold">New Release</h2>

        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="h-20 bg-amber-600 animate-pulse rounded-lg mb-4"></div>

          <div className="flex flex-col xl:flex-row gap-4">
            <div className="flex-1 rounded-lg">
              <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
                {NewRelease()}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full xl:w-72 shrink-0">
              <div className="xl:sticky xl:top-20 h-75 xl:h-100 bg-gray-300 animate-pulse shadow-lg rounded-lg" />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
