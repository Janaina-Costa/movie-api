import { Movie, MovieRepository } from "@/domain/core/src";
import query from "../database/sqlServer/queryDb";
import connectDataBase from "../database/sqlServer/dbSql";
import { MovieProps } from "@/domain/core/src/movie/model/Movie";
import { MovieDTO } from "@/adapters/DTO/MovieDTO";

export default class MovieRepositorySQL implements MovieRepository {
  async findMyId(id: string): Promise<Movie | null> {
    const pool = await connectDataBase();
    const movie = await pool.request().input("id", id).query(query.findById);
    return movie.recordset[0] ? new Movie({ ...movie.recordset[0] }) : null;
  }

  async findByName(name: string): Promise<Movie | null> {
    const pool = await connectDataBase();
    const movie = await pool.request().input("name", name).query(query.findOne);
    return movie.recordset[0] ?? null;
  }

  async findAll(): Promise<Movie[] | []> {
    const pool = await connectDataBase();
    const movies = await pool.request().query(query.findAll);
    return movies.recordset
      ? movies.recordset.map((movie: MovieProps) => new Movie({ ...movie }))
      : [];
  }

  async update(id: string, movie: Movie): Promise<Movie | null> {
    const pool = await connectDataBase();
    const movieDB: MovieDTO = {
      id: id,
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

    const request = pool.request();
    for (const [key, value] of Object.entries(movieDB)) {
      request.input(key, value);
    }

    const result = await request.query(query.update);

    return result.rowsAffected[0] > 0 ? new Movie({ ...movie.props }) : null;
  }

  async delete(id: string): Promise<void | null> {
    const pool = await connectDataBase();
    await pool.request().input("id", id).query(query.delete);
  }

  async save(movie: Movie): Promise<void> {
    const movieDB: MovieDTO = {
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
    const request = pool.request();
    for (const [key, value] of Object.entries(movieDB)) {
      request.input(key, value);
    }
    await request.query(query.create);
  }
}
