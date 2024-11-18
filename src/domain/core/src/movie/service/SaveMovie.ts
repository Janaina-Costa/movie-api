import { MovieRepository } from "../provider/MovieRepository";
import Movie from "../model/Movie";
import UseCase from "../../commons/UseCase";
import MovieName from "../../shared/valueObject/MovieName";
import Quantity from "../../shared/valueObject/Quantity";
import { log } from "console";

type InputMovie = {
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
  created_at?: Date;
};

export default class SaveMovie implements UseCase<InputMovie, void> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(input: InputMovie): Promise<void> {
    const {
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
      created_at,
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
      created_at,
    });

    await this.movieRepository.save(movie);
  }
}
