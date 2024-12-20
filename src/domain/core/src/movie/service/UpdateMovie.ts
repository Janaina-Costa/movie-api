import { MovieRepository } from "../provider/MovieRepository";
import Movie from "../model/Movie";
import UseCase from "../../commons/UseCase";
import DateVO from "../../shared/valueObject/DateVO";
import Quantity from "../../shared/valueObject/Quantity";

type InputMovie = {
  id: string;
  name: string;
  image: string;
  genre: string;
  linkUrl: string;
  watchedDate: string;
  watchedDates: string[];
  userOpinion: string;
  review: string;
  isFirstTimeWatching: boolean;
  quantityViews: number;
  updated_at?: Date;
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
      watchedDates,
      userOpinion,
      review,
      isFirstTimeWatching,
      quantityViews,
      updated_at,
    } = input;

    const movie = new Movie({
      name,
      image,
      genre,
      linkUrl,
      watchedDate,
      watchedDates,
      userOpinion,
      review,
      isFirstTimeWatching,
      quantityViews,
      updated_at,
    });

    const movieU = await this.movieRepository.update(id, movie);
    return movieU ? movieU : movie;
  }
}
