import React, { useState } from "react";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FaStar } from "react-icons/fa";

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <InputText
          className="inp"
          autoFocus
          type="text"
          placeholder="Search for Products"
          value={query}
          onChange={onChange}
        />
      </div>
      <div className="search-result-content">
        {!data?.data?.length && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              className="search-result-item"
              key={item.id}
              onClick={() => {
                navigate("/product/" + item?.id);
                setSearchModal(false);
              }}
            >
              <div className="image-container">
                <img
                  src={
                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    item.attributes.img.data[0].attributes.url
                  }
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.des}</span>
                <span className="price">₹ {item.attributes.price}</span>
                <span className="rating">
                  <FaStar className="star" size={20} />
                  {item.attributes.rating}
                </span>
                <div className="ctas">
                  <Button
                    className="banner-cta v2"
                    label="Shop Now"
                    onClick={() => navigate(`/product/${item?.id}`)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
