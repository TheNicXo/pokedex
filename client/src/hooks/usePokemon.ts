import { useState, useEffect } from 'react';

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  other: {
    showdown?: {
      front_default: string;
    };
    'official-artwork'?: {
      front_default: string;
    };
  };
  versions?: {
    'generation-v'?: {
      'black-white'?: {
        animated?: {
          front_default: string;
        };
      };
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  height: number;
  weight: number;
}

export function usePokemon() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        setError(null);

        // Récupérer la liste des 20 premiers Pokémon
        const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const listData = await listResponse.json();

        // Récupérer les détails de chaque Pokémon
        const pokemonPromises = listData.results.map(async (pokemon: { url: string }) => {
          const response = await fetch(pokemon.url);
          return response.json();
        });

        const pokemonData = await Promise.all(pokemonPromises);
        setPokemons(pokemonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
}
