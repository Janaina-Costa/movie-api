import MovieCreateController from "@/presentation/controllers/movie/MovieCreateController";
import MovieUpdateController from "@/presentation/controllers/movie/MovieUpdateController";
import { Router } from "express";

const movieRouter = Router();

const createMovieController = new MovieCreateController();
const updateMovieController = new MovieUpdateController();

movieRouter.post("/create", createMovieController.create);
movieRouter.put("/update/:id", updateMovieController.update);

export default movieRouter;
