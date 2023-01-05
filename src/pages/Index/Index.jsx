import React from "react";
import Banner from "../../components/Banner/Banner";
import BetButton from "../../components/Buttons/BetButton";
import Divider from "../../components/Divider/Divider";

const Index = () => {
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
                Mise en place d'Api Rest et de bases de données
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
