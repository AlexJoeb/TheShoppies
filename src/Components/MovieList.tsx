import React, { useState, useEffect } from "react";
import { useAppSelector } from "../Redux/hooks";
import { Movie } from "../types";
import MovieCard from "./MovieCard";
export default function MovieList() {
  const [showingMovies, setShowingMovies] = useState<Movie[]>([]);
  const { movies, loading } = useAppSelector(({ movies }) => movies);

  useEffect(() => {
    if (loading === "succeeded") {
      setShowingMovies(!!movies ? movies : []);
    }
  }, [movies, loading]);

  return (
    <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 xs:gap-x-4 xl:gap-x-8 gap-y-4">
      {showingMovies &&
        showingMovies.length >= 1 &&
        showingMovies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
    </ul>
  );
}
