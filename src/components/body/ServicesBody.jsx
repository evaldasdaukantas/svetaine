import React from "react";
import "./services.css";
import logoDish from "./image/services/ronise-daluz-unsplash-YN8wPlQn2JiqJ2a5.avif";
import logoFood from "./image/services/brooke-lark-unsplash-mkEkqQg2l0FxRKPv.avif";
import Paslaugos1 from "./Paslaugos1";
import Paslaugos2 from "./Paslaugos2";
const Services = () => {
  return (
    <div>
      <section className="services">
        <div className="container row">
          <div className="head-text col-lg-12">
            <h2>We can cater to all of your needs </h2>
          </div>
          <div className="text">
            <div className="col-lg-6">
              <p>
                From small, family events to grand corporate gatherings, we
                offer a huge variety of services here at Belton. Let us know
                exactly what your needs are and we will do our very best to make
                your event memorable.
              </p>
              <br />
              <p>
                Even if you don't see your occasion listed below, we encourage
                you to get in touch. We'll be glad to provide you with a custom
                quote.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="list">
                <div className="listService">
                   <div>
                  <b>SERVICES</b>
                  <Paslaugos1 />
                  </div>
                  <div>
                  <b>EXTRA SERVICES</b>
                  <Paslaugos2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <div className="col-lg-6">
              <img src={logoDish} alt="burger" />
            </div>
            <div className="col-lg-6">
              <img src={logoFood} alt="taco" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
