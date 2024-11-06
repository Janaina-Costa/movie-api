import UseCase from "@/domain/core/commons/UseCase";
import Movie from "../model/Movie";
import { MovieRepository } from "../provider/MovieRepository";

export default class FindMovies implements UseCase<void, Movie[]> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    const movie = await this.movieRepository.findAll();

    return movie;
  }
}
