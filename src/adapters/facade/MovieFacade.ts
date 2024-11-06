import { FindMovies, MovieRepository, SaveMovie } from "@/domain/core/src";
import { MovieDTO } from "../DTO/MovieDTO";

export default class MovieFacade {
  constructor(private movieRepository: MovieRepository) {}

  async save(dto: MovieDTO): Promise<void> {
    const useCase = new SaveMovie(this.movieRepository);

    await useCase.execute({
      name: dto.name!,
      image: dto.image!,
      genre: dto.genre!,
      linkUrl: dto.linkUrl!,
      watchedDate: dto.watchedDate!,
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
}
