import Movie from "../model/Movie";

export interface MovieRepository {
  save(movie: Movie): Promise<void>;
  findMyId(id: string): Promise<Movie | null>;
  findByName(name: string): Promise<Movie | null>;
  findAll(): Promise<Movie[] | []>;
  delete(id: string): Promise<void | null>;
}
