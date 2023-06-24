import { useState } from "react";

export default function Sidebar({
  genre,
  setAuthor,
  setGenre,
}: {
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [selected, setSelected] = useState<boolean>(false);
  const genres = [
    "Favorites",
    "Thriller",
    "Self_Help",
    "Classics",
    "Science_Fiction",
    "Entrepreneurship",
    "Horror",
  ];

  return (
    <div className="h-screen w-80 bg-black">
      <div className="text-4xl text-white p-6">
        <p>Booksmart</p>
      </div>
      <ul className="text-2xl text-white ">
        {genres.map((selectedGenre, key) => (
          <li
            key={key}
            className={`${
              genre == selectedGenre && `text-lightGreen`
            } ps-8 py-8 hover:cursor-pointer`}
            onClick={() => {
              setSelected(true);
              setGenre(selectedGenre);
              setAuthor("");
            }}
          >
            {selectedGenre}
          </li>
        ))}
      </ul>
    </div>
  );
}
