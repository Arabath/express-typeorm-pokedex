import { Router } from "express";


import { 
  getPokemon, 
  getPokemonById, 
  createPokemon, 
  deletePokemon, 
  updatePokemon 
} from '../controllers/pokedex.controller';

const router = Router();
router.get('/pokemon', getPokemon);

router.get('/pokemon/:id', getPokemonById);

router.post('/pokemon', createPokemon);

router.put('/pokemon/:id', updatePokemon);

router.delete('/pokemon/:id', deletePokemon);

export default router;
