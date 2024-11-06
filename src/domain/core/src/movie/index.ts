import Movie from "./model/Movie";
import { MovieRepository } from "./provider/MovieRepository";
import DeleteMovie from "./service/DeleteMovie";
import FindMovies from "./service/FindMovies";
import FindMovieById from "./service/FindMovieById";
import FindMovieByName from "./service/FindMovieByName";
import SaveMovie from "./service/SaveMovie";

export {
  Movie,
  DeleteMovie,
  FindMovieById,
  FindMovieByName,
  FindMovies,
  SaveMovie,
};

export type { MovieRepository };
