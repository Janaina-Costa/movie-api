import { Movie, MovieRepository } from "@/domain/core/src";
import query from "../database/sqlServer/queryDb";
import connectDataBase from "../database/sqlServer/dbSql";
import { MovieProps } from "@/domain/core/src/movie/model/Movie";
import { MovieDTO } from "@/adapters/DTO/MovieDTO";

export default class MovieRepositorySQL implements MovieRepository {
  async findMyId(id: string): Promise<Movie | null> {
    const pool = await connectDataBase();
    const result = await pool.request().input("id", id).query(query.findById);

    const movieMap = await this.moviesMap(result);

    return movieMap.values()
      ? Array.from(movieMap.values()).map(
          (movieProps) => new Movie(movieProps),
        )[0]
      : null;
  }

  async findByName(name: string): Promise<Movie | null> {
    const pool = await connectDataBase();
    const movie = await pool.request().input("name", name).query(query.findOne);
    return movie.recordset[0] ?? null;
  }

  async findAll(): Promise<Movie[] | []> {
    const pool = await connectDataBase();
    const result = await pool.request().query(query.findAll);

    const moviesMap = await this.moviesMap(result);

    const movies = Array.from(moviesMap.values()).map(
      (movieProps) => new Movie(movieProps),
    );

    return movies;
  }

  async update(id: string, movie: Movie): Promise<void | null> {
    const pool = await connectDataBase();

    const movieExists = await this.findMyId(id);
    const dateIsAlreadyAdded = movieExists?.watchedDates.find(
      (date) => date.value === movie.watchedDate.value,
    );

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
      updated_at: movie.updated_at,
    };

    const request = pool.request();
    for (const [key, value] of Object.entries(movieDB)) {
      request.input(key, value);
    }
    await request.query(query.update);
    for (const date of movie.watchedDates) {
      if (dateIsAlreadyAdded) {
        return;
      }

      await pool
        .request()
        .input("watchedId", movie.id.value)
        .input("movieId", movieDB.id!)
        .input("watchedDates", date.value)
        .query(query.insertMovieWatchedDates);
    }
  }

  async delete(id: string): Promise<void | null> {
    const pool = await connectDataBase();
    await pool.request().input("id", id).query(query.delete);
  }

  async save(movie: Movie): Promise<void> {
    const pool = await connectDataBase();

    if (
      movie.watchedDate &&
      !movie.watchedDates.some((date) =>
        date.value.includes(movie.watchedDate.value),
      )
    ) {
      movie.watchedDates.push(movie.watchedDate);
    }

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
      created_at: movie.createdAt,
    };

    const request = pool.request();
    for (const [key, value] of Object.entries(movieDB)) {
      request.input(key, value);
    }

    await request.query(query.create);

    for (const date of movie.watchedDates) {
      await pool
        .request()
        .input("watchedId", movie.id.value)
        .input("movieId", movieDB.id!)
        .input("watchedDates", date.value)
        .query(query.insertMovieWatchedDates);
    }
  }

  private async moviesMap(result: any): Promise<Map<string, MovieProps>> {
    const moviesMap = new Map<string, MovieProps>();
    for (const record of result.recordset) {
      moviesMap.set(record.id, {
        id: record.id,
        name: record.name,
        image: record.image,
        genre: record.genre,
        linkUrl: record.linkUrl,
        watchedDate: record.watchedDate,
        watchedDates: [],
        userOpinion: record.userOpinion,
        review: record.review,
        isFirstTimeWatching: record.isFirstTimeWatching,
        quantityViews: record.quantityViews,
        created_at: record.created_at,
        updated_at: record.updated_at,
      });

      const watchedDates = await this.findAllMovieWatchedDates(record.id);

      moviesMap.get(record.id)!.watchedDates = watchedDates;
    }
    return moviesMap;
  }

  private async findAllMovieWatchedDates(movieId: string): Promise<any> {
    const pool = await connectDataBase();
    const watchedDatesResult = await pool
      .request()
      .input("movieId", movieId)
      .query(query.findAllWatchedDates);

    return watchedDatesResult.recordset.map((wd) => wd.watchedDates);
  }
}
