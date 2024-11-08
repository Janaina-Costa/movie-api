import CoreFaced from "@/adapters/facade";
import { Request, Response } from "express";

export default class MovieDeleteController {
  constructor() {}

  render = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const movieExists = await CoreFaced.movie.showById(id);

      if (!movieExists) {
        return res.status(400).json({ message: "Movie not found" });
      }

      await CoreFaced.movie.delete(id);
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (e: any) {
      res.status(500).json({ message: e.message });
    }
  };
}
