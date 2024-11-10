import { MovieRepository } from "../provider/MovieRepository";
import Id from "../../shared/valueObject/Id";
import UseCase from "../../commons/UseCase";

export default class DeleteMovie implements UseCase<string, void | null> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(id: string): Promise<void | null> {
    if (!Id.isValid(id)) return null;
    const movieExists = await this.movieRepository.findMyId(id);

    if (!movieExists) {
      throw new Error("Movie not found");
    }

    return this.movieRepository.delete(id);
  }
}
