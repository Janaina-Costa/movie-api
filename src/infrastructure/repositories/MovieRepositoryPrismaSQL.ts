import { Movie, MovieRepository } from "@/domain/core/src";
import { MovieProps } from "@/domain/core/src/movie/model/Movie";
import { PrismaClient, Movie as MovieDB } from "@prisma/client";

export default class MovieRepositoryPrismaSQL implements MovieRepository {
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
    await this.prisma.movie.create({
      data: movieDB,
    });
  }

  async findAll(): Promise<Movie[]> {
    const movies = await this.prisma.movie.findMany();
    return movies.map((movie: MovieProps) => new Movie({ ...movie }));
  }

  async findMyId(id: string): Promise<Movie | null> {
    const movie = await this.prisma.movie.findUnique({ where: { id } });
    return movie ? new Movie({ ...movie }) : null;
  }

  async findByName(name: string): Promise<Movie | null> {
    const movie = await this.prisma.movie.findUnique({ where: { name } });

    return movie ? new Movie({ ...movie }) : null;
  }

  async update(id: string, movie: Movie): Promise<Movie | null> {
    try {
      const updateMovie = await this.prisma.movie.update({
        where: { id },
        data: {
          name: movie.name.value,
          image: movie.image.value,
          genre: movie.genre.genre,
          linkUrl: movie.linkUrl.value,
          watchedDate: movie.watchedDate.value,
          userOpinion: movie.userOpinion.value,
          review: movie.review.review,
          isFirstTimeWatching: movie.isFirstTimeWatching,
          quantityViews: movie.quantityViews.value,
        },
      });

      return updateMovie ? new Movie({ ...updateMovie }) : null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async delete(id: string): Promise<void | null> {
    const movie = await this.findMyId(id);
    if (!movie) {
      return null;
    }

    await this.prisma.movie.delete({ where: { id } });
  }
}
