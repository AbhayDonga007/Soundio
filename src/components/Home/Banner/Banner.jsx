import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "./Banner.scss";

const Banner = ({ data, bg, bg1 }) => {
  const navigate = useNavigate();
  return (
    <div
      className="hero-banner"
      style={{ background: `${bg}`, background: `${bg1}` }}
    >
      <div className="content">
        <div className="text-content">
          <h1>
            {data?.attributes?.title} <p>{data?.attributes?.subtitle}</p>
          </h1>
          <p>
            Starting From <span>₹{data?.attributes?.price}*</span>
          </p>
          <div className="ctas">
            <Button className="banner-cta" label="Read More" />
            <Button
              className="banner-cta v2"
              label="Shop Now"
              onClick={() => navigate(`/category/${data?.id}`)}
            />
          </div>
        </div>
        <img
          className="banner-img"
          src={
            process.env.REACT_APP_STRIPE_APP_DEV_URL +
            data?.attributes?.img?.data?.attributes?.url
          }
        />
      </div>
    </div>
  );
};

export default Banner;
