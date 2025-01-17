import findus from "../assets/img/findus.avif";
import React from "react";

const WhereToFindUs = () => {
  return (
    <section className="wheretofindus" style={{backgroundImage: `url(${findus})`}}
    alt="person browsing google maps">
      <div
      className="container-fluid findus-wrapper"
    >
      <div className="find-us-section container">
        <h2 className="findus-h2">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-12">
              <h2 className="section-title">Unde ne puteți gãsi</h2>
            </div>
            <div className="col-md-6">
              <div className="findus-card">
                <p className="findus-p">
                  Pe lângă centrul de la adresa{" "}
                  <span className="findus-span">
                    Leonte Anastasievici Nr. 11 corp B,
                  </span>{" "}
                  mai puteți beneficia de serviciile noastre în alte două
                  locații.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="findus-card right-card">
                <p className="findus-p">
                  Una dintre acestea poate fi găsită la adresa Jilava,{" "}
                  <span className="findus-span">
                    str. Magnoliei Nr 1, Dispensar medical Jilava
                  </span>
                  , iar cealaltă la adresa{" "}
                  <span className="findus-span">
                    Islaz, str. Dunării nr. 71, jud Teleorman.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </h2>
      </div>
    </div>
    </section>
  );
};

export default WhereToFindUs;
