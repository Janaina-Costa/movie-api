import Movie from "../model/Movie";
import Id from "../../shared/valueObject/Id";
import { MovieRepository } from "../provider/MovieRepository";
import UseCase from "../../commons/UseCase";

export default class FindMovieById implements UseCase<string, Movie | null> {
  constructor(private movieRepository: MovieRepository) {}

  async execute(id: string): Promise<Movie | null> {
    if (!Id.isValid(id)) return null;
    const movie = await this.movieRepository.findById(id);

    return movie;
  }
}
