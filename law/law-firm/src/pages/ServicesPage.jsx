// src/pages/ServicesPage.jsx

const ServicesPage = () => {
  return (
    <div className="services-page-container">
      <div className="services-page-background"></div>{" "}
      {/* Conteneur pour l'arrière-plan flou */}
      <div className="container">
        {" "}
        {/* Utilisez cette classe pour appliquer les styles flex et de centrage */}
        <h1>Nos Services</h1>
        <ul className="services-page">
          {" "}
          {/* Assurez-vous que cette classe correspond à celle dans votre CSS */}
          <li>Droit des affaires</li>
          <li>Droit immobilier</li>
          <li>Protection des droits de l'homme</li>
          <li>Droit de la famille</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
