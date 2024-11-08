import CoreFaced from "@/adapters/facade";
import { Request, Response } from "express";

export default class MovieFidAllController {
  constructor() {}

  render = async (req: Request, res: Response) => {
    try {
      const movies = await CoreFaced.movie.index();

      res.status(200).json(movies);
    } catch (e: any) {
      res.status(500).json({ message: e.message });
    }
  };
}
