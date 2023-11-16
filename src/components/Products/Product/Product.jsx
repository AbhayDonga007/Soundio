import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_STRIPE_APP_DEV_URL +
            data?.img?.data[0]?.attributes?.url
          }
        />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="des">{data?.des}</span>
        <span className="price">&#8377; {data?.price}</span>
        <div className="ctas">
          <Button className="banner-cta" label="Add To Cart" />
        </div>
      </div>
    </div>
  );
};

export default Product;
