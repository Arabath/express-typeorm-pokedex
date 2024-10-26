import { Request, Response } from "express";
import { Pokedex } from '../entity/pokemon.entity';

interface Pokemon {
  url: string;
  pokemon: string;
  type: string;
  created_at: string;
}

export const getPokemon = async (req: Request, res: Response) => {
  try {
    const Pokemon = await Pokedex.find();
    return res.json(Pokemon);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPokemonById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await Pokedex.findOneBy({ id: parseInt(id) });

    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const createPokemon = async (
  req: Request<unknown, unknown, Pokemon>,
  res: Response
) => {
  const { url, pokemon, type } = req.body;
  const Pokemon = new Pokedex();
  Pokemon.url = url;
  Pokemon.pokemon = pokemon;
  Pokemon.type = type;
  await Pokemon.save();
  return res.json(Pokemon);
};

export const updatePokemon = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const Pokemon = await Pokedex.findOneBy({ id: parseInt(id) });
    if (!Pokemon) return res.status(404).json({ message: "Not user found" });

    await Pokedex.update({ id: parseInt(id) }, req.body);

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deletePokemon = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Pokedex.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};