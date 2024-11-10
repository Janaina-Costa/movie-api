import CoreFaced from "@/adapters/facade";
import { Request, Response } from "express";

export default class MovieDeleteController {
  constructor() {}

  render = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await CoreFaced.movie.delete(id);
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (e: any) {
      res.status(500).json({ message: e.message });
    }
  };
}
