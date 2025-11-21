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
      <footer className="bg-card border-t border-border py-8 mt-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Colonne 1 : À propos */}
            <div>
              <h3 className="font-bold text-lg mb-3">À Propos</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pokédex interactif créé par TheNicXo. Découvrez les 20 premiers Pokémon avec un design moderne.
              </p>
            </div>
            
            {/* Colonne 2 : Liens */}
            <div>
              <h3 className="font-bold text-lg mb-3">Liens</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/TheNicXo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a></li>
                <li><a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PokéAPI</a></li>
              </ul>
            </div>
            
            {/* Colonne 3 : Réseaux */}
            <div>
              <h3 className="font-bold text-lg mb-3">Suivez-moi</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/TheNicXo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/nicolas-l-honorey-hamtane/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          {/* Ligne de séparation */}
          <div className="border-t border-border pt-6">
            <p className="text-center text-xs text-muted-foreground">
              © 2025 TheNicXo. Tous droits réservés. | 
              <a href="https://github.com/TheNicXo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-2">Voir le code source</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
