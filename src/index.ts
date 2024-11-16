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
};

connectDB();

app.listen(PORT, () => console.log(`🚀 Server running at ${HOST}:${PORT}`));
