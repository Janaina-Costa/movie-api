import CoreFaced from "@/adapters/facade";
import { Movie } from "@/domain/core/src";
import { MovieProps } from "@/domain/core/src/movie/model/Movie";
import MovieName from "@/domain/core/src/shared/valueObject/MovieName";
import { Request, Response } from "express";

export default class MovieCreateController {
  constructor() {}

  render = async (req: Request, res: Response) => {
    try {
      const {
        name,
        image,
        genre,
        linkUrl,
        watchedDate,
        userOpinion,
        review,
        isFirstTimeWatching,
        quantityViews,
      }: MovieProps = req.body;

      const sanitizeName = MovieName.sanitizeName(name!);
      console.log(watchedDate);
      if (!sanitizeName) {
        return res.status(400).json({ message: "Invalid name" });
      }

      const movieExists = await CoreFaced.movie.showByName(sanitizeName);

      if (movieExists) {
        return res.status(400).json({ message: "Movie already exists" });
      }

      await CoreFaced.movie.save({
        name,
        image,
        genre,
        linkUrl,
        watchedDate,
        userOpinion,
        review,
        isFirstTimeWatching: true,
        quantityViews,
      });

      res.status(201).json({ message: "Movie created successfully" });
    } catch (e: any) {
      res.status(500).json({ message: e.message });
    }
  };
}
