import React from "react";
import "./ProfitGraph.sass";
import arrowUp from "./../../../../assets/icons/arrow-up.png";
import BarGraph from "./BarGraph";

const ProfitGraph = () => {
  return (
    <div className="profit-graph__container">
      <div className="profit-graph__box">
        <div className="row profit-graph__info">
          <p className="profit-graph__info_title">향후 예상 수익률</p>
          <span className="profit-graph__info_subtitle">
            <p className="profit-graph__expectations">
              5년 평균 예상 수익률 8.5%
            </p>
            <img
              src={arrowUp}
              alt="arrow"
              className="profit-graph__expectations-arrow"
            />
          </span>
        </div>
        <div className="profit-graph__bargraph">
          <BarGraph />
        </div>
      </div>
    </div>
  );
};

export default ProfitGraph;
