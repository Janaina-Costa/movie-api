import DateVO from "../../shared/valueObject/DateVO";
import Entity, { EntityProps } from "../../shared/valueObject/Entity";
import Image from "../../shared/valueObject/Image";
import MovieGenre from "../../shared/valueObject/MovieGenre";
import MovieName from "../../shared/valueObject/MovieName";
import Quantity from "../../shared/valueObject/Quantity";
import SimpleText from "../../shared/valueObject/SimpleText";
import Url from "../../shared/valueObject/Url";
import UserOpinion from "../../shared/valueObject/UserOpinion";
import UserReview from "../../shared/valueObject/UserReview";

export interface MovieProps extends EntityProps {
  name?: string;
  image?: string;
  genre?: string;
  linkUrl?: string;
  watchedDate?: string;
  userOpinion?: string;
  review?: string;
  isFirstTimeWatching?: boolean;
  quantityViews?: number;
  created_at?: Date;
  updated_at?: Date;
}

export default class Movie extends Entity<Movie, MovieProps> {
  readonly name: MovieName;
  readonly image: Image;
  readonly genre: MovieGenre;
  readonly linkUrl: Url;
  readonly watchedDate: DateVO;
  readonly userOpinion: UserOpinion;
  readonly review: UserReview;
  readonly isFirstTimeWatching: boolean;
  readonly quantityViews: Quantity;
  readonly createdAt?: Date;
  readonly updated_at?: Date;

  constructor(props: MovieProps) {
    super(props);
    this.name = new MovieName(props.name!);
    this.image = new Image(props.image!);
    this.genre = new MovieGenre(props.genre!);
    this.linkUrl = new Url(props.linkUrl!);
    this.userOpinion = new SimpleText(props.userOpinion!);
    this.review = new UserReview(props.review!);
    this.watchedDate = DateVO.parse(props.watchedDate!);
    this.isFirstTimeWatching = props.isFirstTimeWatching! ?? true;
    this.quantityViews = new Quantity(props.quantityViews!) ?? 0;
    this.createdAt = props.created_at ?? new Date();
    this.updated_at = props.updated_at ?? new Date();
  }
}
