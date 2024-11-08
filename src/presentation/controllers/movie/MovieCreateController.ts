import CoreFaced from "@/adapters/facade";
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
      } = req.body;

      const movieExists = await CoreFaced.movie.showByName(name);

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
        isFirstTimeWatching,
        quantityViews,
      });

      res.status(201).json({ message: "Movie created successfully" });
    } catch (e: any) {
      res.status(500).json({ message: e.message });
    }
  };
}
