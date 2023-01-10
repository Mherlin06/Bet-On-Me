import React from "react";
import Banner from "../../components/Banner/Banner";
import BetButton from "../../components/Buttons/BetButton";
import Divider from "../../components/Divider/Divider";
import MoreButton from "../../components/Buttons/MoreButton";
import { Card } from "../../components/Card/Card";
import { getExperienceByID } from "../../data/experiences";
import { getCourseById } from "../../data/courses";

const Index = () => {
  const exp1 = getExperienceByID(1);
  const exp2 = getExperienceByID(2);
  const course1 = getCourseById(1);
  const course2 = getCourseById(2);
  console.log(exp1);

  return (
    <div className="page index-page">
      <Banner />
      <section id="index-summary">
        <article className="mainCard">
          <div className="card_text">
            <h1>Compétences Actuelles</h1>
            <ul>
              <li>
                Réaliser une application web complète
                <Divider />
                <BetButton value={10} />
              </li>
              <li>
                Mettre en place des Api Rest et des bases de données
                <Divider />
                <BetButton value={10} />
              </li>
              <li>
                Déployer une stratégie SEO
                <Divider />
                <BetButton value={10} />
              </li>
              <li>
                Manager une équipe
                <Divider />
                <BetButton value={10} />
              </li>
              <li>
                Organiser des voyages
                <Divider />
                <BetButton value={10} />
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section id="index-experiences">
        <h3>Expériences</h3>
        <div className="halfCard-bloc">
          <Card
            image={exp1.image}
            alt={exp1.alt}
            title={exp1.title}
            date={exp1.date}
            company={exp1.company}
            inProgress={true}
          />
          <Card
            image={exp2.image}
            alt={exp2.alt}
            title={exp2.title}
            date={exp2.date}
            company={exp2.company}
            inProgress={true}
          />
        </div>
        <MoreButton></MoreButton>
      </section>
      <section id="index-courses">
        <h3>Formations</h3>
      </section>
      <section id="index-skills">
        <h3>Compétences</h3>
      </section>
      <section id="index-other">
        <h3>Autre</h3>
      </section>
    </div>
  );
};

export default Index;
