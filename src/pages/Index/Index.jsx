import React from "react";
import Banner from "../../components/Banner/Banner";

const Index = () => {
  return (
    <div className="page index-page">
      <Banner />
      <section id="index-summary">
        <article>
          <h1>Compétences Actuelles</h1>
          <ul>
            <li>
              <strong>Réaliser une application web complète </strong>à partir de
              maquettes et d'un cahier des charges fonctionnel et technique.
            </li>
            <li>
              <strong>Mise en place d'Api Rest</strong> et de base de données
              MongoDB.
            </li>
            <li>
              <strong>Déployer une stratégie SEO</strong> afin d'améliorer
              l'accessibilité et les performances d'un site web.
            </li>
            <li>
              <strong>Manager une équipe</strong> d'une dizaine de personnes
              pour garantir les résultats attendus d'un restaurant.
            </li>
            <li>
              <strong>Organiser des voyages,</strong> transports, activités et
              hébergements en fonction d'un budget et d'une durée prédéfinis.
            </li>
          </ul>
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
