import { usePokemon } from '@/hooks/usePokemon';
import PokemonCard from '@/components/PokemonCard';
import { Loader2 } from 'lucide-react';
import { APP_TITLE } from '@/const';

export default function Home() {
  const { pokemons, loading, error } = usePokemon();

  return (
    <div className="min-h-screen bg-background">
      {/* En-tête */}
      <header className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center font-pixel">
            {APP_TITLE}
          </h1>
          <p className="text-center mt-3 text-sm md:text-base opacity-90">
            Découvrez les 20 premiers Pokémon de la première génération
          </p>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container py-12">
        {/* État de chargement */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-16 h-16 animate-spin text-primary mb-4" />
            <p className="text-lg text-muted-foreground">Chargement des Pokémon...</p>
          </div>
        )}

        {/* État d'erreur */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-destructive/10 border border-destructive text-destructive px-6 py-4 rounded-lg max-w-md text-center">
              <p className="font-semibold mb-2">Erreur de chargement</p>
              <p className="text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Grille de Pokémon */}
        {!loading && !error && pokemons.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}

        {/* État vide */}
        {!loading && !error && pokemons.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg text-muted-foreground">Aucun Pokémon trouvé</p>
          </div>
        )}
      </main>

      {/* Pied de page */}
      <footer className="bg-card border-t border-border py-6 mt-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Données fournies par <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PokéAPI</a></p>
        </div>
      </footer>
    </div>
  );
}
