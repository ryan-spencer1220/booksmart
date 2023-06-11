import React from "react";

const Sidebar = ({
  setGenre,
}: {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="h-screen w-80 bg-gray">
      <ul className="text-4xl text-white ">
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Favorites")}
        >
          Favorites
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Thriller")}
        >
          Thriller
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Self_Help")}
        >
          Self Help
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Classics")}
        >
          Classics
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("science_fiction")}
        >
          Science Fiction
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("entrepreneurship")}
        >
          Entrepreneurship
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Horror")}
        >
          Horror
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
