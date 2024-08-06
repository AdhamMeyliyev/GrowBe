import React, { useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import '@splidejs/splide/dist/css/splide.min.css';  
// import '@fortawesome/fontawesome-free/css/all.min.css';

const OurLatestNews = () => {
  const [loveCount, setLoveCount] = useState(0);

  const handleLoveClick = () => {
    setLoveCount(loveCount + 1);
  };

  useEffect(() => {
    new Splide("#news-slider", {
      type: "loop",
      perPage: 2,
      perMove: 2,
      pagination: true,
      arrows: true,
    }).mount();
  }, []);
  return (
    <div className="our-latest-news">
      <h1 className="our-latest-news-heading">Our Latest News</h1>
      <p className="our-latest-news-desc">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae Suspendisse ante arcu, consectetur id nisl eget.
      </p>

      <div id="news-slider" className="splide">
      <div className="splide__track">
        <ul className="splide__list our-latest-news-list">
          <li className="splide__slide our-latest-news-list-item">
            <div className="left">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/our-latest-news-lists-img.png`}
                alt="rasm"
              />
            </div>
            <div className="right">
              <h2 className="right-heading">
                How to become a new digital marketing idea?
              </h2>

              <span className="right-comment-love-admin-wrapper">
                <span className="admin">
                  <i className="admin-icon fa-solid fa-user"></i>
                  <p>By Admin</p>
                </span>

                <span
                  className="love"
                  onClick={handleLoveClick}
                  style={{ cursor: "pointer" }}
                >
                  <i className="like-icon fa-solid fa-heart"></i>
                  <p>{loveCount} love</p>
                </span>

                <span className="comment">
                  <i className="comment-icon fa-regular fa-message"></i>
                  <p>13 Comment</p>
                </span>
              </span>

              <p className="right-desc">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure.
              </p>

              <button className="read-more-btn">Read More...</button>
            </div>
          </li>

          <li className="splide__slide our-latest-news-list-item">
            <div className="left">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/our-latest-news-lists-img.png`}
                alt="rasm"
              />
            </div>
            <div className="right">
              <h2 className="right-heading">
                How to become a new digital marketing idea?
              </h2>

              <span className="right-comment-love-admin-wrapper">
                <span className="admin">
                  <i className="admin-icon fa-solid fa-user"></i>
                  <p>By Admin</p>
                </span>

                <span
                  className="love"
                  onClick={handleLoveClick}
                  style={{ cursor: "pointer" }}
                >
                  <i className="like-icon fa-solid fa-heart"></i>
                  <p>{loveCount} love</p>
                </span>

                <span className="comment">
                  <i className="comment-icon fa-regular fa-message"></i>
                  <p>13 Comment</p>
                </span>
              </span>

              <p className="right-desc">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure.
              </p>

              <button className="read-more-btn">Read More...</button>
            </div>
          </li>

          <li className="splide__slide our-latest-news-list-item">
            <div className="left">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/our-latest-news-lists-img.png`}
                alt="rasm"
              />
            </div>
            <div className="right">
              <h2 className="right-heading">
                How to become a new digital marketing idea?
              </h2>

              <span className="right-comment-love-admin-wrapper">
                <span className="admin">
                  <i className="admin-icon fa-solid fa-user"></i>
                  <p>By Admin</p>
                </span>

                <span
                  className="love"
                  onClick={handleLoveClick}
                  style={{ cursor: "pointer" }}
                >
                  <i className="like-icon fa-solid fa-heart"></i>
                  <p>{loveCount} love</p>
                </span>

                <span className="comment">
                  <i className="comment-icon fa-regular fa-message"></i>
                  <p>13 Comment</p>
                </span>
              </span>

              <p className="right-desc">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure.
              </p>

              <button className="read-more-btn">Read More...</button>
            </div>
          </li>

          <li className="splide__slide our-latest-news-list-item">
            <div className="left">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/our-latest-news-lists-img.png`}
                alt="rasm"
              />
            </div>
            <div className="right">
              <h2 className="right-heading">
                How to become a new digital marketing idea?
              </h2>

              <span className="right-comment-love-admin-wrapper">
                <span className="admin">
                  <i className="admin-icon fa-solid fa-user"></i>
                  <p>By Admin</p>
                </span>

                <span
                  className="love"
                  onClick={handleLoveClick}
                  style={{ cursor: "pointer" }}
                >
                  <i className="like-icon fa-solid fa-heart"></i>
                  <p>{loveCount} love</p>
                </span>

                <span className="comment">
                  <i className="comment-icon fa-regular fa-message"></i>
                  <p>13 Comment</p>
                </span>
              </span>

              <p className="right-desc">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure.
              </p>

              <button className="read-more-btn">Read More...</button>
            </div>
          </li>

          <li className="splide__slide our-latest-news-list-item">
            <div className="left">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/our-latest-news-lists-img.png`}
                alt="rasm"
              />
            </div>
            <div className="right">
              <h2 className="right-heading">
                How to become a new digital marketing idea?
              </h2>

              <span className="right-comment-love-admin-wrapper">
                <span className="admin">
                  <i className="admin-icon fa-solid fa-user"></i>
                  <p>By Admin</p>
                </span>

                <span
                  className="love"
                  onClick={handleLoveClick}
                  style={{ cursor: "pointer" }}
                >
                  <i className="like-icon fa-solid fa-heart"></i>
                  <p>{loveCount} love</p>
                </span>

                <span className="comment">
                  <i className="comment-icon fa-regular fa-message"></i>
                  <p>13 Comment</p>
                </span>
              </span>

              <p className="right-desc">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure.
              </p>

              <button className="read-more-btn">Read More...</button>
            </div>
          </li>

          {/* Bu yerda boshqa slaydlarni qo'shishingiz mumkin */}
        </ul>
      </div>
    </div>
  
    </div>
  );
};

export default OurLatestNews;
