import React from "react";
import "./index.css";

const ProductsCard = ({ items }) => {
  const { id, title } = items;

  return (
    <>
      <img src={items.image} className="products_image" style={{ width: "100%" }} />
      <div className="products_details">
        {/* <span className="title">{items.title.slice(0, 30)}</span> */}
        <span className="title">{items.title.split(' ', 2).join(' ')}</span>
        <span className="prod-desc">
          <div className="products_cart">
            <p className="products_price">
              <span className="" style={{ textDecoration: "underline" }}>
                Sign in
              </span>{" "}
              or Create an account to see pricing
            </p>
            {/* Removed cart functionality */}
            <i
              className="fa-regular fa-heart"
              style={{
                width: "24px",
                height: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                cursor: "pointer",
              }}
            ></i>
          </div>
        </span>
      </div>
    </>
  );
};

export default ProductsCard;
