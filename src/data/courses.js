const courses = [
  {
    title: "Développeur d'applications Androïd",
    level: "titre RNCP niveau 6 (Bac +3/4)",
    date: "2023 - 2025",
    school: "Openclassrooms",
    link:"https://openclassrooms.com/fr/paths/511-developpeur-dapplication-android",
    logo: "../src/assets/images/android-course.webp",
    alt:"smartphone & bugroid"
  },
  {
    title: "Développeur Web",
    level: "titre RNCP niveau 5 (Bac +2)",
    date: "2022",
    school: "Openclassrooms",
    link: "https://openclassrooms.com/fr/paths/556-developpeur-web",
    logo: "../src/assets/images/web-dev-course.webp",
    alt: "ordinateur portable"
  },
  {
    title: "DUT Génie Biologique",
    level: "titre RNCP niveau 5 (Bac +2)",
    date: "2011",
    school: "IUT Toulon la Garde",
    logo: "../src/assets/images/iut-génie-bio.webp",
    alt:"laboratoire"
  },
  {
    title: "BAC STL option Génie Biologique",
    grade: "mention Assez Bien",
    date: "2009",
    school: "Lycée Jules Ferry, Cannes",
    logo: "../src/assets/images/bac-bio.webp",
    alt:"microscope"
  },
];

export function getCourses(){
    return courses;
} 