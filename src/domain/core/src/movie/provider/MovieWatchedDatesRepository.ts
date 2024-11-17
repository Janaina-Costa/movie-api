export interface MovieRepository {
  save(movie: any): Promise<void>;
  findById(): Promise<string[] | []>;
}
