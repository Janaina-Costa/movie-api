import UseCase from "@/domain/core/commons/UseCase";
import { MovieRepository } from "../provider/MovieRepository";
import Movie from "../model/Movie"
import { MovieGenreEnum, MovieReviewEnum } from "../types/enums/movie";



  type InputMovie={
  name: string;
  image: string;
  genre: MovieGenreEnum;
  linkUrl: string;
  watchedDate: string;
  userOpinion: string;
  review: MovieReviewEnum;
  isFirstTimeWatching: boolean;
  quantityViews: number;
}

export default class SaveMovie implements UseCase<InputMovie, void>{
  constructor(private readonly movieRepository:MovieRepository){}

 async execute(input: InputMovie): Promise<void> {
    const {name, image, genre, linkUrl, watchedDate, userOpinion, review,isFirstTimeWatching, quantityViews} = input
    const movie = new Movie({name, image, genre, linkUrl, watchedDate, userOpinion, review,isFirstTimeWatching, quantityViews})
    return this.movieRepository.save(movie)
  }
}