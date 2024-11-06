import UseCase from "@/domain/core/commons/UseCase";
import { MovieRepository } from "../provider/MovieRepository";
import Id from "../../shared/valueObject/Id";

export default class DeleteMovie implements UseCase<string, void | null> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(id: string): Promise<void | null> {
    if (!Id.isValido(id)) return null;

    return this.movieRepository.delete(id);
  }
}
