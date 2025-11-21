export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = "Pokedex de TheNicXo";
export const APP_LOGO = "https://placehold.co/128x128/E1E7EF/1F2937?text=App";

export const AUTHOR_NAME = "TheNicXo";
export const AUTHOR_EMAIL = "nicolas.hamtane@gmail.com";
export const GITHUB_USERNAME = "thenicxo";

// Réseaux sociaux
export const SOCIAL_LINKS = {
  github: "https://github.com/TheNicXo",
  linkedin: "https://www.linkedin.com/in/nicolas-l-honorey-hamtane/",
};

// Personnalisation de l'app
export const APP_DESCRIPTION = "Mon Pokédex interactif - Découvrez les 20 premiers Pokémon";
export const APP_VERSION = "1.0.0";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};
