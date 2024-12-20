import CoreFaced from "@/adapters/facade";
import { Request, Response } from "express";

export default class MovieByIdController {
  constructor() {}
  render = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const movie = await CoreFaced.movie.showById(id);

      if (!movie) {
        return res.status(400).json({ message: "Movie not found" });
      }

      res.status(200).json({ movie: movie });
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  };
}
