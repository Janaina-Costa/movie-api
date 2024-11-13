import dbConfig from "@/settings";
import sql from "mssql";

export const connectDataBase = async () => {
  try {
    const pool = await sql.connect(dbConfig);
    return pool;
  } catch (error) {
    console.log(error);
    throw new Error(`Error connecting to the database ${error}`);
  }
};