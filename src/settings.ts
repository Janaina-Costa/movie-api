import { config } from "dotenv";

config();

const settings = {
  PORT: process.env.PORT || 4001,
  HOST: process.env.HOST || "http://localhost",
  API_URL: process.env.API_URL || "http://localhost:4001",
  SECRET_kEY_JWT: process.env.SECRET_KEY_JWT || "",
  DATABASE_URL: process.env.DATABASE_URL || "",
};

const dbConfig = {
  server: process.env.SQL_SERVER || "localhost",
  database: process.env.SQL_DATABASE || "",
  user: process.env.SQL_USER || "",
  password: process.env.SQL_PASSWORD || "",
  options: {
    encrypt: false,
    enableArithAbort: true,
    trustServerCertificate: true,
  },
};

export const { PORT, HOST, API_URL, SECRET_kEY_JWT, DATABASE_URL } = settings;
export default dbConfig;
