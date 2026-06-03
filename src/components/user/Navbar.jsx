const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 right-0 bg-gray-800 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Perpustakaan</div>
        <div className="flex gap-2">
          <a href="/" className="px-3 py-2 hover:bg-gray-700 rounded">
            Home
          </a>
          <a href="/books" className="px-3 py-2 hover:bg-gray-700 rounded">
            Books
          </a>
          <a href="/about" className="px-3 py-2 hover:bg-gray-700 rounded">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
