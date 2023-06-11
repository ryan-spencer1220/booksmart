import React, { useEffect, useState } from "react";
import Image from "next/image";

const BookDisplay = () => {
  const [bookArray, setBookArray] = useState<any[]>([]);

  const callBooksAPI = async () => {
    const response = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=subject:horror"
    );
    const json = await response.json();
    setBookArray(json.items);
  };

  useEffect(() => {
    callBooksAPI();
  }, []);

  return (
    <div className="grid grid-cols-6 p-10">
      {bookArray &&
        bookArray.map((book, key) => {
          console.log(book);
          return (
            <div key={key} className="p-6">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="hero image"
                height={175}
                width={175}
              />
              <p className="text-2xl">{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.authors[0]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default BookDisplay;
