import React from "react";
import classes from "./OrderSummary.module.scss";
import Plan from "./Plan";
import Button from "../Button/Button";
import ClearButton from "../Button/ClearButton";

const OrderSummary = () => {
  return (
    <div className={classes.summary}>
      <h2>Order Summary</h2>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <Plan/>
       <Button>Proceed to Payment</Button> 
       <ClearButton>Cancel Order</ClearButton>
       
    </div>
  );
};

export default OrderSummary;
