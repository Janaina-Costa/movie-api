import UseCase from "@/domain/core/commons/UseCase";
import { MovieRepository } from "../provider/MovieReposytory";
import Movie from "../model/Movie";


export default class SaveMovie implements UseCase<Movie, void>{
  constructor(private readonly movieRepository:MovieRepository){}

  execute(movie: Movie): Promise<void> {

    return this.movieRepository.save(movie)
  }
}