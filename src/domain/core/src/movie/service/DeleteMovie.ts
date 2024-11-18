import { MovieRepository } from "../provider/MovieRepository";
import Id from "../../shared/valueObject/Id";
import UseCase from "../../commons/UseCase";

export default class DeleteMovie implements UseCase<string, void | null> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(id: string): Promise<void | null> {
    if (!Id.isValid(id)) return null;
    await this.movieRepository.findById(id);

    return this.movieRepository.delete(id);
  }
}
