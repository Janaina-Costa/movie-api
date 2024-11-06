import UseCase from "@/domain/core/commons/UseCase";
import { MovieRepository } from "../provider/MovieReposytory";
import Movie from "../model/Movie";
import Id from "../../shared/valueObject/Id";

export default class FindMovieById implements UseCase<string, Movie | null> {
  constructor(private movieRepository: MovieRepository) {}
  
  async execute(id: string): Promise<Movie | null> {
    if (!Id.isValido(id)) return null;
    const movie = await this.movieRepository.findMyId(id);

    return movie;
  }
}
