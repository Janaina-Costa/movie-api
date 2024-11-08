import MovieCreateController from "@/presentation/controllers/movie/MovieCreateController";
import MovieDeleteController from "@/presentation/controllers/movie/MovieDeleteController";
import MovieFidAllController from "@/presentation/controllers/movie/MovieFindAllController";
import MovieUpdateController from "@/presentation/controllers/movie/MovieUpdateController";
import { Router } from "express";

const movieRouter = Router();

const createMovieController = new MovieCreateController();
const findAllMovieController = new MovieFidAllController();
const updateMovieController = new MovieUpdateController();
const deleteMovieController = new MovieDeleteController();

movieRouter.post("/create", createMovieController.render);
movieRouter.get("/", findAllMovieController.render);

movieRouter.put("/update/:id", updateMovieController.render);
movieRouter.delete("/delete/:id", deleteMovieController.render);

export default movieRouter;
