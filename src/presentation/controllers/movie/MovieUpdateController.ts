import CoreFaced from "@/adapters/facade";
import { Request, Response } from "express";

export default class MovieUpdateController {
  constructor() {}

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
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

      const movieExists = await CoreFaced.movie.showById(id);

      if (!movieExists) {
        return res.status(400).json({ message: "Movie not found" });
      }

      await CoreFaced.movie.update(id, {
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

      return res.status(200).json({ message: "Movie updated" });
    } catch (e: any) {
      res.status(500).json({ message: e.message });
    }
  };
}
