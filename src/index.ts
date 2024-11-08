import express from "express";
import cors from "cors";
import router from "./presentation/routes";
import { HOST, PORT } from "./settings";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.listen(PORT, () => console.log(`🚀 Server running at ${HOST}:${PORT}`));
