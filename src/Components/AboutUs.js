import React from "react";
import cabinet1Image from "../assets/img/cabinet1.webp"; // Import the image
// import cabinet2Image from "../assets/img/cabinet2.webp"; // Import the image

const AboutUs = () => {
  return (
  <section className="about-wrapper" id="about">
      <div
      className="container-fluid"
    >
      <div className="container about-section">
        <div className="row align-items-center">
        
          <div className="col-md-6">
            <h2 className="about-h2 text-start section-title">Cine suntem</h2>
            <p className="about-p">
              Conceptul modern aplicat în tratarea fiecărui caz asigura
              redobândirea sănătății pacientului și promovează un stil de viață
              sănătos.
            </p>
            <p className="about-p">
              La centrul medical ALI CRANTA, primordial în filosofia clinicii
              noastre este redobândirea sănătății pacientului și asigurarea
              vitalității acestuia prin prevenție și adopatarea unui stil de
              viață sănătos și echilibrat fizic și emoțional.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 mt-xs-2">
            <img
              className=" rounded cabinet-img img-fluid"
              src={cabinet1Image}
              alt="Cabinet 1"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutUs;
