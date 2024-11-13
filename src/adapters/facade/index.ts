import MovieRepositorySQL from "@/infrastructure/repositories/MovieRepositorySQL";
import MovieFacade from "./MovieFacade";

export default class CoreFaced {
  static get movie(): MovieFacade {
    const repoSQL = new MovieRepositorySQL();
    return new MovieFacade(repoSQL);
  }
}
