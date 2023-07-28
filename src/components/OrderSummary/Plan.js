import React from "react";
import classes from "./Plan.module.scss";
import IconMusic from "../../images/icon-music.svg";
import LinkButton from "../Button/LinkButton";

const Plan = () => {
  return (
    <div className={classes.plan}>
      <div className={classes.plan__group}>
        <img
          src={IconMusic}
          alt="Icon of music note"
          className={classes.plan__icon}
        />
        <div className={classes.plan__subgroup}>
          <h3>Annual Plan</h3> 
          <p>$59.99/year</p>
        </div>
      </div>{" "}
      <div className={classes.plan__group}>
        <LinkButton>Change</LinkButton>
      </div>
    </div>
  );
};

export default Plan;
