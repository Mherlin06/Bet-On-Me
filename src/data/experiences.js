const experiences = [
  {
    id: 1,
    title: "Développeur Web",
    date: "2022",
    company: "Openclassrooms",
    missions: ["Réalisation de projets professionnalisants"],
    link: "https://github.com/Mherlin06",
    logo: "../src/assets/images/web-dev.webp",
    alt: "écrans de développeurs",
  },
  {
    id: 2,
    title: "Assistant de direction",
    date: "Depuis 2019",
    company: "Phood, Bègles",
    missions: [
      "Création de nouveaux plats pour le développement de la marque",
      "Mise en place de méthodes de travail standardisées pour l'ouverture de nouveaux restaurants",
      "Préparation et organisation des services midi et soir",
      "Réalisation des plats et découpes produits",
      "Gestion des stocks et commandes",
      "Accueil et fidélisation des clients",
      "Nettoyage et entretien du restaurant et du matériel",
    ],
    link: "https://phood.fr",
    logo: "../src/assets/images/phood.webp",
    alt: "plats vietnamiens",
  },
  {
    id: 3,
    title: "Préparateur de service",
    date: "2016 - 2019",
    company: "Flunch, Bouliac",
    missions: [
      "Mise en place de protocoles pour réduire le déficit lié aux pertes alimentaires",
      "Préparation et organisation des services midi et soir",
      "Réalisation des plats et découpes produits",
      "Gestion des stocks et commandes",
      "Accueil et fidélisation des clients",
      "Nettoyage et entretien du restaurant et du matériel",
    ],
    logo: "../src/assets/images/flunch.webp",
    alt: "buffet à volonté",
  },
  {
    id: 4,
    title: "Employé polvalent, Formateur",
    date: "2011 - 2016",
    company: "McDonald's, Cannes la Bocca",
    missions: [
      "Formation des nouveaux employés à tous les postes",
      "Préparation des plats",
      "Accueil et services des clients en caisse et au drive",
      "Nettoyage et entretien du restaurant et du matériel",
    ],
    logo: "../src/assets/images/mcdo.webp",
    alt: "plateau mcdonald's",
  },
  {
    id: 5,
    title: "Voyages",
    date: "Depuis 2010",
    trips: [
      { country: "Japon", flag: "../src/assets/flags/japan.png" },
      { country: "Chine", flag: "../src/assets/flags/china.png" },
      { country: "Corée du sud", flag: "../src/assets/flags/south-korea.png" },
      { country: "Taïwan", flag: "../src/assets/flags/taiwan.png" },
      { country: "Singapour", flag: "../src/assets/flags/singapore.png" },
      { country: "Bali", flag: "../src/assets/flags/indonesia.png" },
      { country: "Cambodge", flag: "../src/assets/flags/cambodia.png" },
      { country: "Islande", flag: "../src/assets/flags/iceland.png" },
      { country: "Irlande", flag: "../src/assets/flags/ireland.png" },
      { country: "Ecosse", flag: "../src/assets/flags/scotland.png" },
      { country: "Angleterre", flag: "../src/assets/flags/england.png" },
      { country: "Allemagne", flag: "../src/assets/flags/germany.png" },
      { country: "Luxembourg", flag: "../src/assets/flags/luxembourg.png" },
      { country: "Espagne", flag: "../src/assets/flags/spain.png" },
      { country: "Portugal", flag: "../src/assets/flags/portugal.png" },
      { country: "Italie", flag: "../src/assets/flags/italy.png" },
      { country: "Pologne", flag: "../src/assets/flags/poland.png" },
      {
        country: "Répulique Tcheque",
        flag: "../src/assets/flags/czech-republic.png",
      },
      { country: "USA", flag: "../src/assets/flags/usa.png" },
      { country: "Canada", flag: "../src/assets/flags/canada.png" },
      { country: "Suède", flag: "../src/assets/flags/sweden.png" },
      { country: "France", flag: "../src/assets/flags/france.png" },
    ],
    logo: "../src/assets/images/voyages.webp",
    alt: "planning de voyage",
  },
];

export function getExperiences() {
  return experiences;
}

export function getExperienceByID(id) {
  return experiences.find((experience) => experience.id === id);
}
