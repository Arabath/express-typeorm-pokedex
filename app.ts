import express from "express";
import morgan from "morgan";
import cors from "cors";


import pokedexRoutes from './routes/pokedex.routes'

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.use("/api", pokedexRoutes);

export default app;
