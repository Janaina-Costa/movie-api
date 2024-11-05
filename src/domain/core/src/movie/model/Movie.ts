import DateVO from "../../shared/valueObject/Date";
import Entity, { EntityProps } from "../../shared/valueObject/Entity";
import Image from "../../shared/valueObject/Image";
import MovieName from "../../shared/valueObject/MovieName";
import Quantity from "../../shared/valueObject/Quantity";
import SimpleText from "../../shared/valueObject/SimpleText";
import Url from "../../shared/valueObject/Url";
import { MovieGenreEnum } from "../types/movieGenreEnum";
import { MovieReviewEnum } from "../types/moviesReview";

export interface MovieProps extends EntityProps {
  name?: string;
  image?: string;
  genre?: MovieGenreEnum;
  linkUrl?: string;
  watchedDate?: string;
  userOpinion?: string;
  review?: MovieReviewEnum;
  isFirstTimeWatching?: boolean;
  quantityViews?: number;
}

export default class Movie extends Entity<Movie, MovieProps> {
  readonly name: MovieName;
  readonly image?: Image;
  readonly genre: MovieGenreEnum;
  readonly linkUrl?: Url;
  readonly watchedDate: DateVO;
  readonly userOpinion: SimpleText;
  readonly review?: MovieReviewEnum;
  readonly isFirstTimeWatching: boolean;
  readonly quantityViews: Quantity;

  constructor(props: MovieProps) {
    super(props);
    this.name = new MovieName(props.name!);
    this.image = new Image(props.image) ?? undefined;
    this.genre = props.genre!;
    this.linkUrl = new Url(props.linkUrl) ?? undefined;
    this.userOpinion = new SimpleText(props.userOpinion!);
    this.review = props.review ?? undefined;
    this.watchedDate = DateVO.parse(props.watchedDate!, "dd-MM-yyyy");
    this.isFirstTimeWatching = props.isFirstTimeWatching ?? true;
    this.quantityViews = new Quantity(props.quantityViews!) ?? 0;
  }
}
