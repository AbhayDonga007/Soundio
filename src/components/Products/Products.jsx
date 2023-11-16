import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="product">
        {products?.data?.map((item) => (
          <Product id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
