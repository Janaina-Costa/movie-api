import express from "express";
import cors from "cors";
import router from "./presentation/routes";
import { HOST, PORT } from "./settings";
import { connectDataBase } from "./infrastructure/database/sqlServer/dbsql";
import query from "./infrastructure/database/sqlServer/queryDb";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

const connectDB = async () => {
  const connect = await connectDataBase();
  if (connect) {
    console.log("🚀 Database connected");
  }
  const result = await connect
    .request()
    .input("id", "c33ba13f-51cd-4ec2-95ae-2b014d78e764")
    .input("name", "Jana Costa")
    .input("image", "lalal.png")
    .input("genre", "Comedia")
    .input("linkUrl", "https://www.youtube.com/watch?v=1")
    .input("watchedDate", "2021-10-10")
    .input("userOpinion", "Muito bom, bla ba bka")
    .input("review", "Bom")
    .input("isFirstTimeWatching", true)
    .input("quantityViews", 1)
    .query(query.create);
};

connectDB();

app.listen(PORT, () => console.log(`🚀 Server running at ${HOST}:${PORT}`));
