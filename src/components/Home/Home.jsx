import React, { useEffect, useContext } from "react";
import useFetch from "../../hooks/useFetch";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { products, setProducts, categories, setCategories } =
    useContext(Context);
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
      console.log(res.data[0].attributes);
    });
  };
  const getCategories = () => {
    fetchDataFromApi("/api/catagories?populate=*").then((res) => {
      setCategories(res);
      console.log(res);
    });
  };

  const data1 = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=1`
  );
  const data2 = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=2`
  );
  const data3 = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=3`
  );
  const data4 = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=4`
  );
  const data5 = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=5`
  );
  const data6 = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=6`
  );
  const data7 = useFetch(
    `/api/products?populate=*&[filters][catagories][id]=7`
  );

  return (
    <div>
      <Banner
        data={categories?.data[0]}
        bg="rgb(255,227,187)"
        bg1="linear-gradient(125deg, rgba(255,227,187,1) 30%, rgba(255,255,255,1) 47%, rgba(131,162,255,1) 59%, rgba(255,254,254,1) 73%, rgba(125,125,125,1) 87%, rgba(255,255,255,1) 100%)"
      />
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {categories?.data?.[0]?.attributes?.title}
            {categories?.data?.[0]?.attributes?.subtitle}
          </div>
          <Products innerPage={true} products={data1.data} />
        </div>
      </div>
      <Banner
        data={categories?.data[1]}
        bg="rgb(135,196,255)"
        bg1="linear-gradient(125deg, rgba(135,196,255,1) 30%, rgba(255,255,255,1) 47%, rgba(166,207,152,1) 59%, rgba(255,254,254,1) 73%, rgba(125,125,125,1) 87%, rgba(255,255,255,1) 100%)"
      />
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {categories?.data?.[1]?.attributes?.title}
            {categories?.data?.[1]?.attributes?.subtitle}
          </div>
          <Products innerPage={true} products={data2.data} />
        </div>
      </div>
      <Banner
        data={categories?.data[2]}
        bg="rgb(254,225,167)"
        bg1="linear-gradient(125deg, rgba(254,225,167,1) 30%, rgba(255,255,255,1) 47%, rgba(208,162,247,1) 59%, rgba(255,254,254,1) 73%, rgba(125,125,125,1) 87%, rgba(255,255,255,1) 100%)"
      />
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {categories?.data?.[2]?.attributes?.title}
            {categories?.data?.[2]?.attributes?.subtitle}
          </div>
          <Products innerPage={true} products={data3.data} />
        </div>
      </div>
      <Banner
        data={categories?.data[3]}
        bg="rgb(208,212,202)"
        bg1="linear-gradient(125deg, rgba(208,212,202,1) 30%, rgba(255,255,255,1) 47%, rgba(117,194,246,1) 59%, rgba(255,254,254,1) 73%, rgba(125,125,125,1) 87%, rgba(255,255,255,1) 100%)"
      />
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {categories?.data?.[3]?.attributes?.title}
            {categories?.data?.[3]?.attributes?.subtitle}
          </div>
          <Products innerPage={true} products={data4.data} />
        </div>
      </div>
      <Banner
        data={categories?.data[4]}
        bg="rgb(224,171,175)"
        bg1="linear-gradient(125deg, rgba(224,171,175,1) 30%, rgba(255,255,255,1) 47%, rgba(107,167,165,1) 59%, rgba(255,254,254,1) 73%, rgba(125,125,125,1) 87%, rgba(255,255,255,1) 100%)"
      />
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {categories?.data?.[4]?.attributes?.title}
            {categories?.data?.[4]?.attributes?.subtitle}
          </div>
          <Products innerPage={true} products={data5.data} />
        </div>
      </div>
      <Banner
        data={categories?.data[5]}
        bg="rgb(179,160,255)"
        bg1="linear-gradient(125deg, rgba(179,160,255,1) 30%, rgba(255,255,255,1) 47%, rgba(249,181,114,1) 59%, rgba(255,254,254,1) 73%, rgba(125,125,125,1) 87%, rgba(255,255,255,1) 100%)"
      />
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {categories?.data?.[5]?.attributes?.title}
            {categories?.data?.[5]?.attributes?.subtitle}
          </div>
          <Products innerPage={true} products={data6.data} />
        </div>
      </div>
      <Banner
        data={categories?.data[6]}
        bg="rgb(135,196,255)"
        bg1="linear-gradient(125deg, rgba(135,196,255,1) 30%, rgba(255,255,255,1) 47%, rgba(166,207,152,1) 59%, rgba(255,254,254,1) 73%, rgba(125,125,125,1) 87%, rgba(255,255,255,1) 100%)"
      />
      <div className="category-main-content">
        <div className="layout">
          <div className="category-title">
            {categories?.data?.[6]?.attributes?.title}
            {categories?.data?.[6]?.attributes?.subtitle}
          </div>
          <Products innerPage={true} products={data7.data} />
        </div>
      </div>
    </div>
  );
};

export default Home;
