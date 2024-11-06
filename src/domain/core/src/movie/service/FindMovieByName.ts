import UseCase from "@/domain/core/commons/UseCase";
import { MovieRepository } from "../provider/MovieReposytory";
import Movie from "../model/Movie";

export default class FindMovieByName implements UseCase<string, Movie | null> {
  constructor(private movieRepository: MovieRepository) {}

  async execute(name: string): Promise<Movie | null> {
    const movie = await this.movieRepository.findByName(name);
    if (!movie) return null;

    return movie;
  }
}
