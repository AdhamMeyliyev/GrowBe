import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Clients = () => {
  useEffect(() => {
    const splide = new Splide("#clients-slider", {
      type: "loop",
      perPage: 3,
      perMove: 3,
      pagination: true,
      arrows: true,
      breakpoints: {
        1200: {
          perPage: 1,
        },
        768: {
          perPage: 1,
        },
        576: {
          perPage: 1,
        },
      },
    });

    splide.on("mounted", () => {
      const items = document.querySelectorAll(".clients-list-item");
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.3}s`;
        item.classList.add("slide-in");
      });
    });

    splide.mount();
  }, []);

  return (
    <div className="clients">
      <h2 className="clients-heading">Our Clients Say</h2>
      <p className="clients-desc">
        Our in-house search engine experts deliver profitable Google, Bing,
        Yahoo Ranking.
      </p>

      <div id="clients-slider" className="splide">
        <div className="splide__track">
          <ul className="splide__list clients-list">
            <li className="splide__slide clients-list-item">
              <p className="clients-list-item-desc">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint cupiditate non
                provident.
              </p>
              <img
                className="quote-icon"
                src={`${process.env.PUBLIC_URL}/assets/icons/quote.png`}
                alt="quote"
              />
              <img
                className="profile-img"
                src={`${process.env.PUBLIC_URL}/assets/images/clients-profile-image.svg`}
                alt="profile-img"
              />
              <h3 className="clients-name">Rabith Halson</h3>
              <span className="occupation">Web Design</span>
            </li>

            <li className="splide__slide clients-list-item">
              <p className="clients-list-item-desc">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint cupiditate non
                provident.
              </p>
              <img
                className="quote-icon"
                src={`${process.env.PUBLIC_URL}/assets/icons/quote.png`}
                alt="quote"
              />
              <img
                className="profile-img"
                src={`${process.env.PUBLIC_URL}/assets/images/clients-profile-image.svg`}
                alt="profile-img"
              />
              <h3 className="clients-name">Rabith Halson</h3>
              <span className="occupation">Web Design</span>
            </li>

            <li className="splide__slide clients-list-item">
              <p className="clients-list-item-desc">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint cupiditate non
                provident.
              </p>
              <img
                className="quote-icon"
                src={`${process.env.PUBLIC_URL}/assets/icons/quote.png`}
                alt="quote"
              />
              <img
                className="profile-img"
                src={`${process.env.PUBLIC_URL}/assets/images/clients-profile-image.svg`}
                alt="profile-img"
              />
              <h3 className="clients-name">Rabith Halson</h3>
              <span className="occupation">Web Design</span>
            </li>

            <li className="splide__slide clients-list-item">
              <p className="clients-list-item-desc">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint cupiditate non
                provident.
              </p>
              <img
                className="quote-icon"
                src={`${process.env.PUBLIC_URL}/assets/icons/quote.png`}
                alt="quote"
              />
              <img
                className="profile-img"
                src={`${process.env.PUBLIC_URL}/assets/images/clients-profile-image.svg`}
                alt="profile-img"
              />
              <h3 className="clients-name">Rabith Halson</h3>
              <span className="occupation">Web Design</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clients;
