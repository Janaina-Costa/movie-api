import {
  FindMovies,
  MovieRepository,
  SaveMovie,
  FindMovieByName,
  FindMovieById,
  DeleteMovie,
} from "@/domain/core/src";
import { MovieDTO } from "../DTO/MovieDTO";
import UpdateMovie from "@/domain/core/src/movie/service/UpdateMovie";

export default class MovieFacade {
  constructor(private readonly movieRepository: MovieRepository) {}

  async save(dto: MovieDTO): Promise<void> {
    const useCase = new SaveMovie(this.movieRepository);

    await useCase.execute({
      name: dto.name!,
      image: dto.image!,
      genre: dto.genre!,
      linkUrl: dto.linkUrl!,
      watchedDate: dto.watchedDate!,
      watchedDates: dto.watchedDates!,
      userOpinion: dto.userOpinion!,
      review: dto.review!,
      isFirstTimeWatching: dto.isFirstTimeWatching!,
      quantityViews: dto.quantityViews!,
    });
  }

  async index(): Promise<MovieDTO[]> {
    const useCase = new FindMovies(this.movieRepository);
    const movie = await useCase.execute();

    return movie.map((m) => m.props);
  }

  async showById(id: string): Promise<MovieDTO | null> {
    const useCase = new FindMovieById(this.movieRepository);
    const movie = await useCase.execute(id);
    return movie ? movie.props : null;
  }

  async showByName(name: string): Promise<MovieDTO | null> {
    const useCase = new FindMovieByName(this.movieRepository);
    const movie = await useCase.execute(name);

    return movie ? movie.props : null;
  }

  async update(id: string, dto: MovieDTO): Promise<MovieDTO | null> {
    const useCase = new UpdateMovie(this.movieRepository);
    const movie = await useCase.execute({
      id,
      name: dto.name!,
      image: dto.image!,
      genre: dto.genre!,
      linkUrl: dto.linkUrl!,
      watchedDate: dto.watchedDate!,
      watchedDates: dto.watchedDates!,
      userOpinion: dto.userOpinion!,
      review: dto.review!,
      isFirstTimeWatching: dto.isFirstTimeWatching!,
      quantityViews: dto.quantityViews!,
    });
    return movie ? movie.props : null;
  }

  async delete(id: string): Promise<void> {
    const useCase = new DeleteMovie(this.movieRepository);

    await useCase.execute(id);
  }
}
