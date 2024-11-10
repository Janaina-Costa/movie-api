import CoreFaced from "@/adapters/facade";
import { Movie } from "@/domain/core/src";
import { MovieProps } from "@/domain/core/src/movie/model/Movie";
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

      await CoreFaced.movie.save({
        name,
        image,
        genre,
        linkUrl,
        watchedDate,
        userOpinion,
        review,
        isFirstTimeWatching,
        quantityViews,
      });

      res.status(201).json({ message: "Movie created successfully" });
    } catch (e: any) {
      res.status(500).json({ message: e.message });
    }
  };
}
