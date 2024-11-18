import { MovieRepository } from "../provider/MovieRepository";
import Movie from "../model/Movie";
import UseCase from "../../commons/UseCase";
import MovieName from "../../shared/valueObject/MovieName";
import Quantity from "../../shared/valueObject/Quantity";
import { log } from "console";

type InputMovie = {
  name: string;
  image: string;
  genre: string;
  linkUrl: string;
  watchedDate: string;
  watchedDates: string[];
  userOpinion: string;
  review: string;
  isFirstTimeWatching: boolean;
  quantityViews: number;
  created_at?: Date;
};

export default class SaveMovie implements UseCase<InputMovie, void> {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(input: InputMovie): Promise<void> {
    const {
      name,
      image,
      genre,
      linkUrl,
      watchedDate,
      watchedDates,
      userOpinion,
      review,
      isFirstTimeWatching,
      quantityViews,
      created_at,
    } = input;

    const sanitizeName = MovieName.sanitizeName(name);

    const movieExists = await this.movieRepository.findByName(sanitizeName);

    // let lengthQ

    // if(watchedDates){
    //   lengthQ = watchedDates.length;
    // }else{
    //   console.log('aqui ');

    //   lengthQ = 0;
    // }

    // const quantity = new Quantity(quantityViews,lengthQ, isFirstTimeWatching);

    // console.log('quantity', quantity.value);

    if (movieExists) {
      throw new Error("Movie already exists");
    }
    const movie = new Movie({
      name: sanitizeName,
      image,
      genre,
      linkUrl,
      watchedDate,
      watchedDates,
      userOpinion,
      review,
      isFirstTimeWatching,
      quantityViews,
      created_at,
    });

    await this.movieRepository.save(movie);
  }
}
