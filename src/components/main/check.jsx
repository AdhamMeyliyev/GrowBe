import React from "react";

const Check = () => {
  return (
    <div className="check">
      <div className="check-container">
        <div className="check-left">
          <h2 className="check-heading">Check Your Website Speed </h2>
          <p className="check-desc">
            Distinctively exploit optimal alignments for intuitive bandwidth.
            Quickly coordinate e-business through revolutionary.
          </p>
          <form action="#" className="check-form">
            <span className="inputs-wrapper">
              <input
                className="web-url"
                type="url"
                name="url"
                placeholder="Web URL"
              />
              <input
                className="email"
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </span>
            <button className="check-form-btn">Submit</button>
          </form>
        </div>
        <div className="check-right">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/check-img.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Check;
