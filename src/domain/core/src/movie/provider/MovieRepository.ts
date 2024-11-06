import Movie from "../model/Movie";

export interface MovieRepository{
  save(movie: Movie): Promise<void>;
  findMyId(id: string): Promise<Movie>;
  findByName(name: string): Promise<Movie>;
  findAll(): Promise<Movie[]>;
  delete(id: string): Promise<void>;
}