import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const [colour, setColour] = useState(null);
  const colours = [
    { name: "Ivory White", color: "#d1d1d1" },
    { name: "Black", color: "#22201f" },
    { name: "Light Pink", color: "#d48f87" },
    { name: "Crimson Cream", color: "#c5b898" },
    { name: "Steel Blue", color: "#586575" },
    { name: "Viper Green", color: "#3e5844" },
    { name: "Active Black MatteIndi", color: "#666666" },
  ];

  const selectedColours = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center" style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: `${option.color}`,
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              margin: "3px",
              marginRight: "7px",
            }}
          ></div>
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  const coloursOptions = (option) => {
    return (
      <div className="flex align-items-center" style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: `${option.color}`,
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            margin: "3px",
            marginRight: "7px",
          }}
        ></div>
        <div>{option.name}</div>
      </div>
    );
  };

  const panelFooterTemplate = () => {
    return (
      <div className="py-9 px-3">
        {colour ? (
          <span>
            <center>
              <b>{colour.name}</b> Selected.
            </center>
          </span>
        ) : (
          "No Colour Selected."
        )}
      </div>
    );
  };

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  const product = data?.data?.[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                product.img.data[0].attributes.url
              }
            />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="desc">{product.des}</span>
            <span className="price">&#8377; {product.price}</span>
            <div className="list card flex justify-content-center">
              <div className="head">Choose your colour :</div>
              <Dropdown
                value={colour}
                onChange={(e) => setColour(e.value)}
                options={colours}
                optionLabel="name"
                placeholder="Select a Colour"
                style={{ fontSize: "20px" }}
                valueTemplate={selectedColours}
                itemTemplate={coloursOptions}
                className="colour"
                panelFooterTemplate={panelFooterTemplate}
              />
            </div>
            <div className="cart-buttons">
              <div className="head">Quantity :</div>
              <div className="quantity-buttons">
                <span className="btn" onClick={decrement}>
                  -
                </span>
                <span>{quantity}</span>
                <span className="btn" onClick={increment}>
                  +
                </span>
              </div>
              <div className="button">
                <Button
                  className="add-to-cart-button"
                  label="Confirm Order"
                  onClick={() => {
                    handleAddToCart(data?.data?.[0], quantity);
                    setQuantity(1);
                  }}
                />
              </div>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                <div className="head">Category :</div>
                <span>{product.catagories.data[0].attributes.title}</span>
                <span>{product.catagories.data[0].attributes.subtitle}</span>
              </span>
              <span className="text-bold">
                <div className="head">Share :</div>
                <span className="social-icons">
                  <FaFacebookF size={20} />
                  <FaTwitter size={20} />
                  <FaInstagram size={20} />
                  <FaLinkedinIn size={20} />
                  <FaPinterest size={20} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product.catagories.data[0].id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
