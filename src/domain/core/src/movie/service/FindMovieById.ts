import Movie from "../model/Movie";
import Id from "../../shared/valueObject/Id";
import { MovieRepository } from "../provider/MovieRepository";
import UseCase from "../../commons/UseCase";
import IdAdapter from "../provider/IdAdapter";

export default class FindMovieById implements UseCase<string, Movie | null> {
  constructor(
    private movieRepository: MovieRepository,
    private iDAdapter: IdAdapter,
  ) {}

  async execute(id: string): Promise<Movie | null> {
    if (!Id.isValid(id)) return null;
    const movie = await this.movieRepository.findMyId(id);

    return movie;
  }
}
