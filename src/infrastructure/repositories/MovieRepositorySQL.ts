import { Movie, MovieRepository } from "@/domain/core/src";
import { connectDataBase } from "../database/sqlServer/dbsql";
import query from "../database/sqlServer/queryDb";
import { DB_SQL } from "../database/sqlServer";

export default class MovieRepositorySQL implements MovieRepository {
  findMyId(id: string): Promise<Movie | null> {
    throw new Error("Method not implemented.");
  }
  async findByName(name: string): Promise<Movie | null> {
    const pool = await connectDataBase();
    const movie = await pool.request().input("name", name).query(query.findOne);
    return movie.recordset[0];
  }
  findAll(): Promise<Movie[] | []> {
    throw new Error("Method not implemented.");
  }
  update(id: string, movie: Movie): Promise<Movie | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void | null> {
    throw new Error("Method not implemented.");
  }

  async save(movie: Movie): Promise<void> {
    const movieDB: any = {
      id: movie.id.value,
      name: movie.name.value,
      image: movie.image.value,
      genre: movie.genre.genre,
      linkUrl: movie.linkUrl.value,
      watchedDate: movie.watchedDate.value,
      userOpinion: movie.userOpinion.value,
      review: movie.review.review,
      isFirstTimeWatching: movie.isFirstTimeWatching,
      quantityViews: movie.quantityViews.value,
    };
    const pool = await connectDataBase();
    await pool
      .request()
      .input("id", DB_SQL.VarChar, movieDB.id)
      .input("name", DB_SQL.VarChar, movieDB.name)
      .input("image", DB_SQL.VarChar, movieDB.image)
      .input("genre", DB_SQL.VarChar, movieDB.genre)
      .input("linkUrl", DB_SQL.VarChar, movieDB.linkUrl)
      .input("watchedDate", DB_SQL.VarChar, movieDB.watchedDate)
      .input("userOpinion", DB_SQL.Text, movieDB.userOpinion)
      .input("review", DB_SQL.VarChar, movieDB.review)
      .input("isFirstTimeWatching", DB_SQL.Bit, movieDB.isFirstTimeWatching)
      .input("quantityViews", DB_SQL.Int, movieDB.quantityViews)
      .query(query.create);
  }
}
