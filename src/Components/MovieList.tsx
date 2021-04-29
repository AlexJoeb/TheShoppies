import { useState, useEffect } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Movie } from "../types";
export default function MovieList() {
  const [showingMovies, setShowingMovies] = useState<Movie[]>([]);
  const { movies, loading } = useAppSelector(({ movies }) => movies);
  useEffect(() => {
    if (loading === "succeeded") {
      console.log(movies);
      setShowingMovies(movies);
    }
  }, [movies, loading]);
  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 xs:gap-x-4 xl:gap-x-8 gap-y-4">
      {showingMovies.length >= 1 &&
        showingMovies.map((movie, index) => (
          <li
            key={index}
            className="relative bg-white rounded-lg shadow h-auto"
          >
            <div className="group block w-full aspect-w-10 aspect-h-7 rounded-t-lg bg-gray-100 overflow-hidden">
              <img
                src={
                  movie.Poster !== "N/A" ? movie.Poster : "/assets/no_photo.jpg"
                }
                alt={`${movie.Title}'s Photo`}
                className="object-cover pointer-events-none"
              />
            </div>
            <div className="group px-2 my-2 space-y-2 grid grid-cols-1 justify-between items-center w-full">
              <div className="w-full">
                <p className="block text-sm font-medium font-bold text-gray-900 truncate w-full pointer-events-none">
                  {movie.Title}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                  Published: {movie.Year}
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
