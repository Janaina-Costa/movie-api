import MovieWatchedDatesRepository from "@/infrastructure/repositories/MovieWatchedDatesRepository";
import MovieFacade from "./MovieFacade";
import MovieRepositorySQL from "@/infrastructure/repositories/MovieRepositorySQL";
export default class CoreFaced {
  static get movie(): MovieFacade {
    const repoWatchedDates = new MovieWatchedDatesRepository();
    const repoSQL = new MovieRepositorySQL(repoWatchedDates);
    return new MovieFacade(repoSQL);
  }
}
