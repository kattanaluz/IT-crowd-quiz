import dotenv from "dotenv";
const result = dotenv.config();

export const configPort = process.env.DB_PORT;
export const configHost = process.env.DB_HOST;
export const configDatabase = process.env.DB_DATABASE;
export const configPassword = process.env.DB_PASSWORD;
export const configUser = process.env.DB_USER;
