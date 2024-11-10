import UseCase from "../../commons/UseCase";
import Movie from "../model/Movie";
import { MovieRepository } from "../provider/MovieRepository";

export default class FindMovies implements UseCase<void, Movie[]> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    const movie = await this.movieRepository.findAll();
    if (!movie) {
      return [];
    }

    return movie;
  }
}
