import { useState } from "react";
import { Movie } from "../types";
export default function MovieList() {
  const [movies] = useState<Movie[]>([
    {
      title: "Lord of the Rings",
      published: 1997,
    },
    {
      title: "Hitchhikers Guide to the Galaxy",
      published: 2003,
    },
    {
      title: "Lord of the Rings",
      published: 1997,
    },
    {
      title: "Hitchhikers Guide to the Galaxy",
      published: 2003,
    },
    {
      title: "Lord of the Rings",
      published: 1997,
    },
    {
      title: "Hitchhikers Guide to the Galaxy",
      published: 2003,
    },
    {
      title: "Lord of the Rings",
      published: 1997,
    },
    {
      title: "Hitchhikers Guide to the Galaxy",
      published: 2003,
    },
    {
      title: "Lord of the Rings",
      published: 1997,
    },
    {
      title: "Hitchhikers Guide to the Galaxy",
      published: 2003,
    },
    {
      title: "Lord of the Rings",
      published: 1997,
    },
    {
      title: "Hitchhikers Guide to the Galaxy",
      published: 2003,
    },
  ]);
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 xs:gap-x-4 xl:gap-x-8 gap-y-4">
      {movies.length &&
        movies.map((movie, index) => (
          <li key={index} className="relative bg-white rounded-lg shadow">
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-t-lg bg-gray-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                alt=""
                className="group-hover:scale-150 object-cover pointer-events-none"
              />
            </div>
            <div className="group px-2 my-2 space-y-2 grid grid-cols-1 justify-between items-center w-full">
              <div className="w-full">
                <p className="block text-sm font-medium font-bold text-gray-900 truncate w-full pointer-events-none">
                  {movie.title}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                  Published: {movie.published}
                </p>
              </div>
              <button
                type="button"
                className="py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Nominate
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
}
