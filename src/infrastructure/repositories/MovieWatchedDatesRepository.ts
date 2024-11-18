import { MovieProps } from "@/domain/core/src/movie/model/Movie";
import connectDataBase from "../database/sqlServer/dbSql";
import query from "../database/sqlServer/queryDb";

export default class MovieWatchedDatesRepository
  implements MovieWatchedDatesRepository
{
  async save(movie: MovieProps): Promise<void> {
    const pool = await connectDataBase();

    await pool
      .request()
      .input("watchedId", movie.id)
      .input("movieId", movie.id)
      .input("watchedDates", movie.watchedDate)
      .query(query.insertMovieWatchedDates);
  }

  async findById(movieId: string): Promise<string[] | []> {
    const pool = await connectDataBase();
    const watchedDatesResult = await pool
      .request()
      .input("movieId", movieId)
      .query(query.findByIdWatchedDates);

    return watchedDatesResult.recordset.map((wd) => wd.watchedDates);
  }

  async countMovieWatchedDates(movieId: string): Promise<number> {
    const pool = await connectDataBase();
    const result = await pool
      .request()
      .input("movieId", movieId)
      .query(query.countWatchedDates);

    return result.recordset[0][""];
  }
}
