import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import {
  addNomination,
  removeNomination,
} from "../Redux/reducers/nominationReducer";
import { Movie } from "../types";
import { ReactComponent as Checkmark } from "../Assets/checkmark.svg";

export enum CardType {
  HOME_LIST,
  NOMINATED_CARD,
}
export default function MovieCard({
  movie,
  cardType = CardType.HOME_LIST,
}: {
  movie: Movie;
  cardType?: CardType;
}) {
  const nominations = useAppSelector((state) => state.nominations);
  const dispatch = useAppDispatch();
  const nominate = () => {
    dispatch(addNomination(movie));
  };
  const removeCard = () => {
    dispatch(removeNomination(movie.imdbID));
  };
  return (
    <li className="relative bg-white rounded-lg shadow h-auto">
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-t-lg bg-gray-100 overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/assets/no_photo.jpg"}
          alt={`${movie.Title}'s Poster`}
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
          className={`py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white ${
            cardType === CardType.NOMINATED_CARD ? "bg-red-600" : "bg-blue-600"
          } ${
            cardType === CardType.NOMINATED_CARD
              ? "hover:bg-red-700"
              : "hover:bg-blue-700"
          } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            cardType === CardType.NOMINATED_CARD
              ? "focus:ring-red-500"
              : "focus:ring-blue-500"
          } disabled:bg-blue-200`}
          disabled={
            cardType === CardType.HOME_LIST &&
            (nominations.length >= 5 ||
              !!nominations.filter((nom) => nom.imdbID === movie.imdbID).length)
          }
          onClick={() =>
            cardType === CardType.NOMINATED_CARD ? removeCard() : nominate()
          }
        >
          {cardType === CardType.NOMINATED_CARD ? (
            "Remove"
          ) : nominations.filter((nom) => nom.imdbID === movie.imdbID)
              .length ? (
            <Checkmark className="mx-auto" />
          ) : (
            "Nominate"
          )}
        </button>
      </div>
    </li>
  );
}
