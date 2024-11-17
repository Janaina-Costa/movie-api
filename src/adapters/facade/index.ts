import MovieFacade from "./MovieFacade";
import MovieRepositorySQL from "@/infrastructure/repositories/MovieRepositorySQL";
export default class CoreFaced {
  static get movie(): MovieFacade {
    const repoSQL = new MovieRepositorySQL();
    return new MovieFacade(repoSQL);
  }
}
