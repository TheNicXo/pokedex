export const typeColors: Record<string, { bg: string; text: string }> = {
  normal: { bg: 'bg-gray-400', text: 'text-white' },
  fire: { bg: 'bg-orange-500', text: 'text-white' },
  water: { bg: 'bg-blue-500', text: 'text-white' },
  electric: { bg: 'bg-yellow-400', text: 'text-gray-900' },
  grass: { bg: 'bg-green-500', text: 'text-white' },
  ice: { bg: 'bg-cyan-400', text: 'text-gray-900' },
  fighting: { bg: 'bg-red-700', text: 'text-white' },
  poison: { bg: 'bg-purple-500', text: 'text-white' },
  ground: { bg: 'bg-yellow-600', text: 'text-white' },
  flying: { bg: 'bg-indigo-400', text: 'text-white' },
  psychic: { bg: 'bg-pink-500', text: 'text-white' },
  bug: { bg: 'bg-lime-500', text: 'text-gray-900' },
  rock: { bg: 'bg-yellow-700', text: 'text-white' },
  ghost: { bg: 'bg-purple-700', text: 'text-white' },
  dragon: { bg: 'bg-indigo-700', text: 'text-white' },
  dark: { bg: 'bg-gray-800', text: 'text-white' },
  steel: { bg: 'bg-gray-500', text: 'text-white' },
  fairy: { bg: 'bg-pink-400', text: 'text-white' },
};

export function getTypeColor(typeName: string): { bg: string; text: string } {
  return typeColors[typeName.toLowerCase()] || { bg: 'bg-gray-400', text: 'text-white' };
}
