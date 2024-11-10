import { MovieRepository } from "../provider/MovieRepository";
import Movie from "../model/Movie";
import UseCase from "../../commons/UseCase";
import MovieName from "../../shared/valueObject/MovieName";

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

    const sanitizeName = MovieName.sanitizeName(name);

    const movieExists = await this.movieRepository.findByName(sanitizeName);

    if (movieExists) {
      throw new Error("Movie already exists");
    }

    const movie = new Movie({
      name: sanitizeName,
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
