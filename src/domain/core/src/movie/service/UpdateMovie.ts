import { MovieRepository } from "../provider/MovieRepository";
import Movie from "../model/Movie";
import UseCase from "../../commons/UseCase";

type InputMovie = {
  id: string;
  name: string;
  image: string;
  genre: string;
  linkUrl: string;
  watchedDate: string;
  userOpinion: string;
  review: string;
  isFirstTimeWatching: boolean;
  quantityViews: number;
};

export default class UpdateMovie implements UseCase<InputMovie, Movie> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(input: InputMovie): Promise<Movie> {
    const {
      id,
      name,
      image,
      genre,
      linkUrl,
      watchedDate,
      userOpinion,
      review,
      isFirstTimeWatching,
      quantityViews,
    } = input;
    const movie = new Movie({
      name,
      image,
      genre,
      linkUrl,
      watchedDate,
      userOpinion,
      review,
      isFirstTimeWatching,
      quantityViews,
    });
    const movieU = await this.movieRepository.update(id, movie);
    return movieU ? movieU : movie;
  }
}
