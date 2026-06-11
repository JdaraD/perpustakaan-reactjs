import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Books = () => {
  const [open, setOpen] = useState(false);
  const [kategori, setKategori] = useState("Pilih Kategori Buku");

  const options = ["Buku Fiksi", "Buku Non Fiksi"];

  const [openJenis, setOpenJenis] = useState(false);
  const [jenis, setJenis] = useState("Pilih Jenis Buku");

  const Jenis = ["Pelajaran", "Umum", "Biografi", "Motivasi"];

  function Book() {
    const Books = [];

    for (let i = 0; i < 20; i++) {
      Books.push(
        <div
          key={i}
          className="flex flex-col bg-white rounded-md shadow-lg overflow-hidden"
        >
          <div className="flex justify-center items-center bg-red-400">
            <div className="w-36 h-40 bg-amber-300"></div>
          </div>

          <div className="flex flex-col items-center gap-2 p-4">
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
    return Books;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col bg-gray-200 w-[80%] h-auto rounded-md shadow-lg m-4 p-4 gap-4">
        <div className="flex flex-col items-center justify-center h-auto w-full rounded-md gap-4">
          <h1 className="font-bold text-3xl">Word BookPedia</h1>
          <div className="border-b border-gray-500/20 w-full"></div>
          <div className="flex gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Cari Judul buku..."
                className=" rounded-xl border border-gray-200 bg-white py-2 pl-10 pr-4 shadow-sm outline-none transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-3 top-5 -translate-y-1/2 text-gray-400"
              />
            </div>

            <div className="relative w-64">
              <button
                onClick={() => setOpen(!open)}
                className="w-full bg-white border border-gray-200 rounded-xl p-2 flex justify-between items-center shadow-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              >
                <span>{kategori}</span>
                <span>▼</span>
              </button>

              {open && (
                <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden z-50">
                  {options.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setKategori(option);
                        setOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-purple-100 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative w-64">
              <button
                onClick={() => setOpenJenis(!openJenis)}
                className="w-full bg-white border border-gray-200 rounded-xl p-2 flex justify-between items-center shadow-sm transition-all duration-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              >
                <span>{jenis}</span>
                <span>▼</span>
              </button>

              {openJenis && (
                <div className="absolute mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden z-50">
                  {Jenis.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setJenis(option);
                        setOpenJenis(false);
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-purple-100 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
            {Book()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
