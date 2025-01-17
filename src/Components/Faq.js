import React from "react";

const Faq = () => {
  return (
    <section>
      <div className="faq-section">
      <div
        className="accordion container"
        id="accordionExample"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="mb-5 section-title">Intrebări frecvente</h1>
        <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h4>Cum ajungi la clinica noastră?</h4>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Sunt numeroase mijloace de transport cu care puteti ajunge la
                clinica noastră.
              </p>
              <p>
                Cel mai facil mijloc de transport in apropierea clinicii este
                statia de metrou Eroilor, aflata pe magistralele M1, M3, M5. In
                zona se regasesc statii pentru autobuzele 336, 123, 226, 696,
                troleibuzele 61 si 62.
              </p>
              <p>
                Ca punct de reper, clinica se gaseste pe stradutele din spatele
                spitalului Universitar.
              </p>
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h4>Acceptați bilete de trimitere?</h4>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Bineînțeles! Cu excepția fisei auto, toate serviciile noastre se
                pot deconta prin CASMB.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h4>Intrebarea dvs. nu se regaseste mai sus?</h4>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p className="mb-3">
                Nu ezitati sa ne contactati telefonic la numerele de telefon:
              </p>
              <a className="d-block" href="tel:0725 596 895">0725 596 895</a>
              <a className="d-block" href="tel:0724 284 595">0724 284 595</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Faq;
