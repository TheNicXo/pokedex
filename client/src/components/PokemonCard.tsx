import { Card, CardContent } from '@/components/ui/card';
import { getTypeColor } from '@/lib/pokemonTypes';
import type { Pokemon } from '@/hooks/usePokemon';
import { useState } from 'react';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Choisir le sprite à afficher (animé si disponible, sinon artwork officiel)
  const getSprite = () => {
    if (imageError) {
      return pokemon.sprites.front_default;
    }
    
    // Essayer d'obtenir le sprite animé en priorité
    const animatedSprite = pokemon.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default;
    if (animatedSprite && isHovered) {
      return animatedSprite;
    }
    
    // Sinon utiliser l'artwork officiel
    return pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default;
  };

  const formatPokemonNumber = (id: number) => {
    return `#${id.toString().padStart(3, '0')}`;
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card 
      className="pokemon-card-hover pokemon-card-shadow overflow-hidden border-2 border-gray-200 bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center">
          {/* Numéro du Pokémon */}
          <div className="w-full text-right mb-2">
            <span className="text-sm font-semibold text-muted-foreground">
              {formatPokemonNumber(pokemon.id)}
            </span>
          </div>

          {/* Image du Pokémon */}
          <div className="relative w-32 h-32 mb-4 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-full">
            <img
              src={getSprite()}
              alt={pokemon.name}
              className="w-full h-full object-contain transition-transform duration-300"
              style={{ imageRendering: isHovered ? 'pixelated' : 'auto' }}
              onError={() => setImageError(true)}
            />
          </div>

          {/* Nom du Pokémon */}
          <h3 className="text-xl font-bold text-card-foreground mb-3 capitalize">
            {capitalizeFirstLetter(pokemon.name)}
          </h3>

          {/* Types */}
          <div className="flex gap-2 flex-wrap justify-center">
            {pokemon.types.map((typeInfo) => {
              const colors = getTypeColor(typeInfo.type.name);
              return (
                <span
                  key={typeInfo.type.name}
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${colors.bg} ${colors.text}`}
                >
                  {typeInfo.type.name}
                </span>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
