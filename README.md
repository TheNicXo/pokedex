# Pokédex Interactif 🔴⚪

Une application web interactive présentant les 20 premiers Pokémon de la première génération, avec un design moderne et des animations fluides.

## ✨ Fonctionnalités

- 📱 **Interface responsive** - Fonctionne sur mobile, tablette et desktop
- 🎨 **Design moderne** - Thème inspiré des Pokéballs avec animations
- ⚡ **Chargement rapide** - Utilise React 19 et Vite
- 🎯 **Sprites animés** - Affichage des Pokémon avec sprites haute qualité
- 🏷️ **Types colorés** - Chaque type a sa propre couleur distinctive
- 🔄 **Données en temps réel** - Récupération via l'API PokéAPI

## 🛠️ Technologies

- **Frontend** : React 19 + TypeScript
- **Styling** : Tailwind CSS 4 + shadcn/ui
- **Build** : Vite
- **Routing** : Wouter
- **API** : PokéAPI (gratuite et open-source)

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- pnpm (ou npm/yarn)

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/VOTRE_USERNAME/pokedex.git
cd pokedex
```

2. **Installer les dépendances**
```bash
pnpm install
```

3. **Démarrer le serveur de développement**
```bash
pnpm dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

### Build pour la production
```bash
pnpm build
```

## 📁 Structure du Projet

```
pokedex/
├── client/
│   ├── public/          # Fichiers statiques
│   ├── src/
│   │   ├── components/  # Composants React réutilisables
│   │   ├── hooks/       # Hooks personnalisés
│   │   ├── lib/         # Utilitaires
│   │   ├── pages/       # Pages principales
│   │   ├── contexts/    # Contextes React
│   │   ├── App.tsx      # Composant racine
│   │   ├── main.tsx     # Point d'entrée
│   │   └── index.css    # Styles globaux
│   └── index.html       # HTML principal
├── package.json         # Dépendances
├── vite.config.ts       # Configuration Vite
├── tsconfig.json        # Configuration TypeScript
└── README.md            # Ce fichier
```

## 📝 Crédits et Attributions

- **Données Pokémon** : [PokéAPI](https://pokeapi.co/)
- **Composants UI** : [shadcn/ui](https://ui.shadcn.com/)
- **Framework** : [React](https://react.dev/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.
MIT © 2025 [TheNicXo](https://github.com/TheNicXo)

## 🤝 Contribution

Les contributions sont bienvenues ! Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour plus de détails.

---

**Créé avec ❤️ en 2025**
