import { Applinks } from "@/types/app-links";

export const footerApplicationLinks: Applinks[] = [
  {
    label: "Acceuill",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projects",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Ralph wolckoll",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Commandes",
    baseUrl: "https://youtube.com",
    type: "external",
  },
];
export const footerUsersLinks: Applinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublié ",
    baseUrl: "/#",
    type: "internal",
  },
];
export const footerInformationLinks: Applinks[] = [
  {
    label: "Conditions Générales",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialités",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contacts",
    baseUrl: "/#",
    type: "internal",
  },
];
export const footerSocialNetwordLinks: Applinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com",
    type: "external",
  },
  {
    label: "Linkedin",
    baseUrl: "https://www.linkedin.com",
    type: "external",
  },
  {
    label: "Slack",
    baseUrl: "https://coders-monkeys.slack.com",
    type: "external",
  },
];

export const FooterLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetwordLinks,
  },
];
