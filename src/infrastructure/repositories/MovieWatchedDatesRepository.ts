import connectDataBase from "../database/sqlServer/dbSql";
import query from "../database/sqlServer/queryDb";

export default class MovieWatchedDatesRepository
  implements MovieWatchedDatesRepository
{
  async save(movie: any): Promise<void> {
    const pool = await connectDataBase();
    for (const date of movie.watchedDates) {
      await pool
        .request()
        .input("watchedId", movie.id.value)
        .input("movieId", movie.id!)
        .input("watchedDates", date.value)
        .query(query.insertMovieWatchedDates);
    }
  }

  async findById(movieId: string): Promise<string[] | []> {
    const pool = await connectDataBase();
    const watchedDatesResult = await pool
      .request()
      .input("movieId", movieId)
      .query(query.findByIdWatchedDates);

    return watchedDatesResult.recordset.map((wd) => wd.watchedDates);
  }
}
