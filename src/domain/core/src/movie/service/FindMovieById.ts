import Movie from "../model/Movie";
import Id from "../../shared/valueObject/Id";
import { MovieRepository } from "../provider/MovieRepository";
import UseCase from "../../commons/UseCase";

export default class FindMovieById implements UseCase<string, Movie | null> {
  constructor(private movieRepository: MovieRepository) {}

  async execute(id: string): Promise<Movie | null> {
    if (!Id.isValido(id)) return null;
    const movie = await this.movieRepository.findMyId(id);

    return movie;
  }
}
