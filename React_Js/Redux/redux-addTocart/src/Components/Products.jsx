import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { addItem } from "../features/Cartslice";
import { getProducts } from "../features/ProductSlice";
import AlertPopup from "./AlertPopup";
import ProductItem from "./ProductItem";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import zIndex from "@mui/material/styles/zIndex";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Products() {
  const [alert, setAlert] = useState(false);
  const [cartLn, setCartLn] = useState(0);
  const dispatch = useDispatch();

  //get all the products from store
  const products = useSelector((state) => {
    return state.list.products;
  });
  const { loading, error } = useSelector((state) => {
    return state.list;
  });
  //get all the products of cart
  const cart = useSelector((state) => {
    return state.product.cart;
  });
  // fetch all the products
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  // add to cart
  const addToCart = (id) => {
    setAlert(true);
    dispatch(addItem(id));
  };
  //close popup

  const handlePOPup = (isAlertopen) => {
    setAlert(isAlertopen);
  };
  // to check wheater  the product is in cart or not
  const isProductInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  // how many products are there in cart
  useEffect(() => {
    setCartLn(cart.length);
  }, [cart]);
  return (
    <div>
      {alert && <AlertPopup setAlert={handlePOPup} />}
      <nav className="text-2xl text-center p-2 bg-gray-100">
        <Link to={"/cart"}>Cart</Link>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartLn} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </nav>

      <div className="flex justify-between items-center flex-wrap gap-2 mx-auto mt-10 px-4">
        {products ? (
          products.map((e, i) => {
            return (
              <ProductItem
                key={i}
                title={e.title}
                id={e.id}
                addToCart={addToCart}
                product={e}
                image={e.images[0]}
                isProductInCart={isProductInCart}
              />
            );
          })
        ) : loading ? (
          <ShimmerSimpleGallery card imageHeight={300} caption col={4} />
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}
