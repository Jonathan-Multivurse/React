import React from "react";
import "./InvestmentCardDashboard.sass";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.only("xs")]: {
      backgroundColor: "transparent",
      position: "absolute",
      height: 15,
      right: 12,
      top: 14,
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "transparent",
      position: "absolute",
      height: 12,
      right: 12,
      top: 8,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",
      position: "absolute",
      height: 12,
      right: 12,
      top: 8,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "transparent",
      position: "absolute",
      height: 12,
      right: 12,
      top: 8,
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: "transparent",
      position: "absolute",
      height: 20,
      right: 20,
      top: 12,
    },
  },
}));

const InvestmentCardDashboard = ({
  investmentObject,
  index,
  stars4,
  stars5,
  children,
  style,
}) => {
  const changeStyles = (event) => {
    const investingInfo = event.target
      .closest("div")
      .querySelector(".investing__info");
    if (investingInfo) {
      investingInfo.classList.add("investing__info-hover");
    }
  };

  const returnStyles = (event) => {
    const investingInfo = event.target
      .closest("div")
      .querySelector(".investing__info");
    if (investingInfo) {
      investingInfo.classList.remove("investing__info-hover");
    }
  };

  const classes = useStyles();

  return (
    <div
      style={style}
      className="investment-card-dash-container"
      onMouseOver={changeStyles}
      onMouseOut={returnStyles}
    >
      <div
        className="col-8 col-sm-6 offset-sm-0 col-lg-4 investment-card-dash__card"
        key={index}
      >
        <Link to="/investing/details">
          <img
            src={investmentObject.image}
            alt="main"
            className="investment-card-dash__card-picture"
          />
        </Link>
        <img src={investmentObject.icon} alt="heart" className={classes.root} />

        <div className="investment-card__card-body container">
          <div className="row">
            <div className="col-4 investment-card__card-small-box">
              <p className="card-small-title">수익성</p>
              <img src={stars5} alt="5 stars" className="card-picture" />
            </div>
            <div className="col-4 investment-card__card-small-box">
              <p className="card-small-title">수익성</p>
              <img src={stars4} alt="4 stars" className="card-picture" />
            </div>
            <div className="col-4 investment-card__card-small-box">
              <p className="card-small-title">투자 만기</p>
              <p>{investmentObject.year}</p>
            </div>
            <div className="col-6 investment-card__card-large-box">
              <p className="card-small-title">배당수익률</p>
              <div className="card-info">
                <p className="count">연&nbsp; &nbsp;</p>
                <p className="percentage-dash">
                  {investmentObject.dividendYield}
                </p>
                <p className="count-dash">%</p>
              </div>
            </div>
            <div className="col-6 investment-card__card-large-box">
              <p className="card-small-title">총 수익률</p>
              <div className="card-info">
                <p className="count-dash">연&nbsp; &nbsp;</p>
                <p className="percentage-dash">
                  {investmentObject.totalReturn}
                </p>
                <p className="count-dash">%</p>
              </div>
              <p className="comment-dash">(매각차이 포함)</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default InvestmentCardDashboard;
