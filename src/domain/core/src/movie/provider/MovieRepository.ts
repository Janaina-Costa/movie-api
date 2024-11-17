import Movie from "../model/Movie";

export interface MovieRepository {
  save(movie: Movie): Promise<void>;
  findById(id: string): Promise<Movie | null>;
  findByName(name: string): Promise<Movie | null>;
  findAll(): Promise<Movie[] | []>;
  update(id: string, movie: Movie): Promise<void | null>;
  delete(id: string): Promise<void | null>;
}
