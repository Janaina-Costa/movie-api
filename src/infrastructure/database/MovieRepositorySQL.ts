import { Movie, MovieRepository } from "@/domain/core/src";
import { MovieProps } from "@/domain/core/src/movie/model/Movie";
import { PrismaClient, Movie as MovieDB } from "@prisma/client";

export default class MovieRepositorySQL implements MovieRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(movie: Movie): Promise<void> {
    const movieDB: MovieDB = {
      id: movie.id.value ?? "",
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
    await this.prisma.movie.upsert({
      where: { id: movie.id.value ?? -1 },
      create: movieDB as any,
      update: movieDB,
    });
  }

  async findAll(): Promise<Movie[]> {
    const movies = await this.prisma.movie.findMany();
    return movies.map((movie: MovieProps) => new Movie({ ...movie }));
  }
}
