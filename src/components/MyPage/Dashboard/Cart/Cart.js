import React from "react";
import "./Cart.sass";
import heart from "./../../../../assets/icons/heart.svg";
import cart1 from "./../../../../assets/icons/cart1.png";
import cart2 from "./../../../../assets/icons/cart2.png";
import cart3 from "./../../../../assets/icons/cart3.png";
import Grid from "@material-ui/core/Grid";

const Cart = () => {
  return (
    <div className="cart">
      <Grid container className="cart__card">
        <Grid item className="cart__image-box">
          <img src={cart1} alt="cart" className="cart__image" />
        </Grid>
        <Grid item className="cart__image-box">
          <img src={cart2} alt="cart" className="cart__image" />
        </Grid>
        <Grid item className="cart__image-box">
          <img src={cart3} alt="cart" className="cart__image" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
