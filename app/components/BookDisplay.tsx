import React, { useEffect, useState } from "react";

const BookDisplay = ({
  genre,
  setAuthor,
  setTitle,
}: {
  genre: string;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [bookArray, setBookArray] = useState<any[]>([]);

  const callBooksAPI = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?g=phpmax-results=40&q=subject:${genre}`
    );
    const json = await response.json();
    setBookArray(json.items);
  };

  useEffect(() => {
    callBooksAPI();
  }, [genre]);

  return (
    <div className="grid grid-cols-6 px-10">
      {bookArray &&
        bookArray.map((book, key) => {
          return (
            <div key={key} className="p-6">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="hero image"
                height={175}
                width={175}
                className="rounded-2xl shadow-lg contrast-75 hover:filter-none hover:cursor-pointer hover:animate-pulse"
                onClick={() => {
                  setAuthor(book.volumeInfo.authors[0]);
                  setTitle(book.volumeInfo.title);
                }}
              />
              <p className="text-2xl py-4">{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.authors[0]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default BookDisplay;
