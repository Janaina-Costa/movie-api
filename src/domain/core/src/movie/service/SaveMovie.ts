import { MovieRepository } from "../provider/MovieRepository";
import Movie from "../model/Movie";
import UseCase from "../../commons/UseCase";

type InputMovie = {
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

export default class SaveMovie implements UseCase<InputMovie, void> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(input: InputMovie): Promise<void> {
    const {
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
    return this.movieRepository.save(movie);
  }
}
