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
          onClick={() => setGenre("Top 100")}
        >
          Top 100
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Nonfiction")}
        >
          Nonfiction
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Classics")}
        >
          Classics
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Science Fiction")}
        >
          Science Fiction
        </li>
        <li
          className="ps-4 py-8 hover:cursor-pointer"
          onClick={() => setGenre("Biography")}
        >
          Biography
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
