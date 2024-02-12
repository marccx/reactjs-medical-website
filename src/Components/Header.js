import React from "react";

const Header = () => {
  return (
    <section className="p-0">
      <div
      className="header-container container-fluid"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="container">
      <div className="row">
        <div className="col-md-6">
        <div className="header-h1-btn-wrapper">
        <h1 className="header-h1">
          Bun venit la Ali Cranta <br /> Medical Center
        </h1>
        <p className="text-white mb-4">
        La centrul medical ALI CRANTA, primordial în filosofia clinicii noastre este redobândirea sănătății pacientului și asigurarea vitalității acestuia prin prevenție și adopatarea unui stil de viață sănătos și echilibrat fizic și emoțional.
        </p>
        <a href="#about" className="btn-get-started">
          Află mai multe
        </a>
      </div>
        </div>
      </div>
      </div>
    </div>
    </section>
  );
};

export default Header;
