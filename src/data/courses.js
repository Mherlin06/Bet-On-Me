const courses = [
  {
    id: 1,
    title: "Développeur d'applications Androïd",
    level: "titre RNCP niveau 6 (Bac +3/4)",
    date: "2023 - 2025",
    school: "Openclassrooms",
    link: "https://openclassrooms.com/fr/paths/511-developpeur-dapplication-android",
    image: "../src/assets/images/android-course.webp",
    alt: "smartphone & bugroid",
    logo: "./logo/android-logo.png",
    category: "formations",
    inProgress: true,
  },
  {
    id: 2,
    title: "Développeur Web",
    level: "titre RNCP niveau 5 (Bac +2)",
    date: "2022",
    school: "Openclassrooms",
    link: "https://openclassrooms.com/fr/paths/556-developpeur-web",
    image: "../src/assets/images/web-dev-course.webp",
    alt: "ordinateur portable",
    logo: "./logo/web-logo.png",
    category: "formations",
    inProgress: false,
  },
  {
    id: 3,
    title: "DUT Génie Biologique",
    level: "titre RNCP niveau 5 (Bac +2)",
    date: "2011",
    school: "IUT Toulon la Garde",
    image: "../src/assets/images/iut-génie-bio.webp",
    alt: "laboratoire",
    logo: "./logo/dut-logo.png",
    category: "formations",
    inProgress: false,
  },
  {
    id: 4,
    title: "BAC STL option Génie Biologique",
    grade: "mention Assez Bien",
    date: "2009",
    school: "Lycée Jules Ferry, Cannes",
    image: "../src/assets/images/bac-bio.webp",
    alt: "microscope",
    logo: "./logo/bac-logo.png",
    category: "formations",
    inProgress: false,
  },
];

export function getCourses() {
  return courses;
}

export function getCourseById(id) {
  return courses.find((course) => course.id === id);
}
