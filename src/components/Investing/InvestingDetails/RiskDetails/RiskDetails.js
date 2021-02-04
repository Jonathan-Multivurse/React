import React from "react";
import "./RiskDetails.sass";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import sharp from "./../../../../assets/icons/InvestingDetails/sharp.png";
import blur from "./../../../../assets/icons/InvestingDetails/blur.png";
import Box from "@material-ui/core/Box";
const RiskDetails = () => {
  return (
    <div className="risk-details">
      <div className="risk-details__container">
        <p className="risk-details__title">
          자세한 정보를 보고 싶으시다면 아래의 문서를 다운 받아 주세요
        </p>
        <Grid
          container
          direction="row"
          className="risk-details__cards-container"
        >
          <Paper elevation={3} className="risk-details__card">
            <Grid
              item
              direction="column"
              className="risk-details__card-container"
            >
              <Grid item direction="row" className="risk-details__card-row">
                <img
                  className="risk-details__card-image"
                  src={sharp}
                  alt="shrp"
                ></img>
                <div className="risk-details__card-text1-blue">투자 설명서</div>
              </Grid>
              <Box
                borderBottom={1}
                style={{
                  color: "#3769fc",
                  width: 150,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              ></Box>
              <div className="risk-details__card-text2-blue">
                Document Download
              </div>
            </Grid>
          </Paper>
          <Paper elevation={3} className="risk-details__card">
            <Grid
              item
              direction="column"
              className="risk-details__card-container"
            >
              <Grid item direction="row" className="risk-details__card-row">
                <img
                  className="risk-details__card-image"
                  src={blur}
                  alt="blr"
                ></img>
                <div className="risk-details__card-text1-grey">
                  임대차 계약서
                </div>
              </Grid>
              <Box
                borderBottom={1}
                style={{
                  color: "#3769fc",
                  width: 150,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              ></Box>
              <div className="risk-details__card-text2-grey">
                Document Download
              </div>
            </Grid>
          </Paper>
          <Paper elevation={3} className="risk-details__card">
            <Grid
              item
              direction="column"
              className="risk-details__card-container"
            >
              <Grid item direction="row" className="risk-details__card-row">
                <img
                  className="risk-details__card-image"
                  src={blur}
                  alt="blr"
                ></img>
                <div className="risk-details__card-text1-grey">대출 계약서</div>
              </Grid>
              <Box
                borderBottom={1}
                style={{
                  color: "#3769fc",
                  width: 150,
                  paddingTop: 5,
                  paddingBottom: 5,
                }}
              ></Box>
              <div className="risk-details__card-text2-grey">
                Document Download
              </div>
            </Grid>
          </Paper>
        </Grid>
        {/*
        <div className="row no-gutters risk-details__row">
          <div className="col-6 col-lg-4 d-flex">
            <img src={detailFirst} alt="detail" className="risk-details__pic" />
          </div>
          <div className="col-6 col-lg-4  d-flex">
            <img
              src={detailSecond}
              alt="detail"
              className="risk-details__pic"
            />
          </div>
          <div className="col-6 col-lg-4 d-flex">
            <img src={detailThird} alt="detail" className="risk-details__pic" />
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default RiskDetails;
