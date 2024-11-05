import Movie, { MovieProps } from "@/domain/core/src/movie/model/Movie";
import { MovieGenreEnum } from "@/domain/core/src/movie/types/movieGenreEnum";
import { MovieReviewEnum } from "@/domain/core/src/movie/types/moviesReview";

export default class MovieBuider {

  private constructor(private props: MovieProps) {}

  static create() {
    return new MovieBuider({
      name: "Avatar",
      image: "image.jpg",
      genre: MovieGenreEnum.FICCAO,
      linkUrl: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
      watchedDate: '05-11-2024',
      userOpinion: "Achei uma bela porcaria",
      review: MovieReviewEnum.PESSIMO,
      isFirstTimeWatching: false,
      quantityViews: 3,
    })
  }

  agora():Movie{
    return new Movie(this.props)
  }
}
