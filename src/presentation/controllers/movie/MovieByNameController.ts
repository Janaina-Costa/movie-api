import CoreFaced from "@/adapters/facade";
import { Request, Response } from "express";

export default class MovieByNameController {
  constructor() {}

  render = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      await CoreFaced.movie.showByName(name);
    } catch (e: any) {
      return res.status(500).json({ message: e.message });
    }
  };
}
