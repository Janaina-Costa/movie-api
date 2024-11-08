import { config } from "dotenv";

config();

const settings = {
  PORT: process.env.PORT || 4001,
  HOST: process.env.HOST || "http://localhost",
  API_URL: process.env.API_URL || "http://localhost:4001",
  SECRET_kEY_JWT: process.env.SECRET_KEY_JWT || "",
  DATABASE_URL: process.env.DATABASE_URL || "",
};

export const { PORT, HOST, API_URL, SECRET_kEY_JWT, DATABASE_URL } = settings;
