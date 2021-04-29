import { useAppDispatch } from "../Redux/hooks";
import { addNomination } from "../Redux/reducers/nominationReducer";
import { Movie } from "../types";

export default function MovieCard({ movie }: { movie: Movie }) {
  const dispatch = useAppDispatch();
  const nominate = (movie: Movie) => {
    dispatch(addNomination(movie));
  };
  return (
    <li className="relative bg-white rounded-lg shadow h-auto">
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-t-lg bg-gray-100 overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/assets/no_photo.jpg"}
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
          onClick={() => nominate(movie)}
        >
          Nominate
        </button>
      </div>
    </li>
  );
}
