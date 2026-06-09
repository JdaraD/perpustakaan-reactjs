const BookDetails = () => {
  return (
    <div className="flex w-full h-full items-center justify-center my-4">
      <div className="flex flex-col h-full w-[80%]">
        <div className="flex w-full h-80">
          <div className="flex relative justify-center items-center w-[50%] h-full">
            <div className="absolute bg-gray-400 top-2 w-68 h-90 rounded-md shadow-2xl"></div>
          </div>
          <div className="flex relative flex-col w-[50%] h-full p-4 gap-4">
            <h1 className="text-2xl font-bold">Book Title</h1>
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm text-gray-700">Author: John Doe</p>
              <p className="text-sm text-gray-700">Published: 2020</p>
            </div>
            <button className="absolute bottom-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 cursor-pointer">
              Read Book
            </button>
          </div>
        </div>
        <div className="flex bg-gray-300/30 flex-col w-full h-auto rounded-md shadow-lg p-4 mb-2">
          <div className="border-b border-gray-500/20 mt-10 mb-2"></div>
          <div className="flex w-full h-full">
            <div className="flex flex-col justify-between w-[50%] h-full p-4 gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Description</h2>
                <p className="text-sm text-gray-700">
                  This is a detailed description of the book. It provides
                  insights into the plot, characters, and themes explored in the
                  story. Readers can get a glimpse of what to expect when they
                  read the book.
                </p>
              </div>
              <div className="flex w-full h-auto items-center justify-center">
                <div className="flex justify-center w-[20%] h-full p-4">
                  <div className="bg-gray-500 inset-shadow-amber-50 w-16 h-16 rounded-full shadow-lg"></div>
                </div>
                <div className="flex flex-col w-[80%] h-full gap-2 p-4">
                  <h3 className="text-lg font-bold">Reviews</h3>
                  <p className="text-sm text-gray-700">
                    "An amazing read! The story was captivating and the
                    characters were well-developed." - Jane Smith
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[50%] h-auto p-4 gap-6">
              <div>
                <h2 className="text-base font-bold">Editors</h2>
                <p className="text-sm text-gray-700">Jane Doe</p>
              </div>
              <div>
                <h2 className="text-base font-bold">Language</h2>
                <p className="text-sm text-gray-700">
                  Standard English (US & UK)
                </p>
              </div>
              <div>
                <h2 className="text-base font-bold">Paperback</h2>
                <p className="text-sm text-gray-700">
                  paper textured, full colour, 345 pages
                </p>
                <p className="text-sm text-gray-700">ISBN: 123-4567890123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
