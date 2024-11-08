import UseCase from "../../commons/UseCase";
import Movie from "../model/Movie";
import { MovieRepository } from "../provider/MovieRepository";

export default class FindMovieByName implements UseCase<string, Movie | null> {
  constructor(private movieRepository: MovieRepository) {}

  async execute(name: string): Promise<Movie | null> {
    const movie = await this.movieRepository.findByName(name);
    if (!movie) return null;

    return movie;
  }
}
