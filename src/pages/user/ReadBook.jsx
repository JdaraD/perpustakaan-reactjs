import { Link } from "react-router-dom";

const ReadBook = () => {
  return (
    <div className="flex justify-center items-center w-full h-full rounded-md my-4">
      <div className="bg-gray-300/30 flex relative flex-col lg:flex-row w-[80%] h-auto rounded-md shadow-lg p-4 lg:gap-2 md:gap-2 gap-4 mb-2">
        <div className="flex flex-col animate-pulse bg-gray-300 min-h-screen lg:w-[64%] w-full rounded-md shadow-lg p-4 justify-between"></div>
        <div className="h-auto lg:w-[36%] w-full">
          <form
            action=""
            method="post"
            className="h-auto w-full flex flex-col justify-center items-center border-2 rounded-md border-gray-300 p-4 gap-4"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">Review Book</h2>
              <div className="flex justify-center items-center gap-1">
                <label htmlFor="" className="text-sm">
                  Judul Buku :
                </label>
                <p className="text-sm text-gray-700">
                  Harry Potter and the Philosopher's Stone
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-2 rounded-md border-gray-300 p-0.5"
                ></input>
                <label htmlFor="phone">Number Hp :</label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border-2 rounded-md border-gray-300 p-0.5"
                ></input>
                <label htmlFor="email">Email :</label>
                <input
                  type="text"
                  id="email"
                  className="w-full border-2 rounded-md border-gray-300 p-0.5"
                ></input>
                <label htmlFor="" className="text-sm">
                  Review :
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className="w-full border-2 rounded-md border-gray-300 p-2"
                ></textarea>
                <div className="flex items-center gap-2">
                  <span className="text-lg">Rating:</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-2xl text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white w-[90%] px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 cursor-pointer"
            >
              Submit Review
            </button>
          </form>
        </div>
        <Link to="/book-details" className="absolute right-4 bottom-4">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer shadow-md"
          >
            back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ReadBook;
