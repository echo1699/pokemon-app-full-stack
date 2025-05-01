import { fetchPokemonData } from "./data/data-all-pokemon.js";
import { fetchOnePokemonData } from "./data/data-one-pokemon.js";
import express from "express";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: ["https://pokedex-app-echo-new-831381062774.us-central1.run.app",
    "http://localhost:5173",
    "http://localhost:8080",
    "https://pokedex-app-echo-beta-831381062774.us-central1.run.app"
  ]
}
const port = process.env.PORT || 3000;
app.use(cors(corsOptions));

app.get('/pokemon', async (req, res) => {
  try {
    const id = parseInt(req.query.id);
    const name = req.query.name;
    if (id) {
      res.send(await fetchOnePokemonData(id) || 'Pokemon ID is not found!');
    } else if (name) {
      res.send(await fetchOnePokemonData(name) || 'Pokemon name is not found');
    } else {
      res.send(await fetchPokemonData());
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Site currently not available. Please try again later.');
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});