import React from "react";
import "./AboutCompany.sass";
import aboutCompany from "./../../assets/icons/AboutCompany/about-company.jpg";
import beRichFirstGraph from "./../../assets/icons/AboutCompany/beRich1.png";
import beRichSecondGraph from "./../../assets/icons/AboutCompany/beRich2.png";
import arrow from "./../../assets/icons/arrow-up.png";
import compass from "./../../assets/icons/AboutCompany/compass.png";
import money from "./../../assets/icons/AboutCompany/money.png";
import umbrella from "./../../assets/icons/AboutCompany/umbrella.png";
import platform from "./../../assets/icons/AboutCompany/platform.png";
import Footer from "./../Footer/Footer";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
const AboutCompany = () => {
  return (
    <div className="wrapper">
      <div className="about-company">
        <img
          src={aboutCompany}
          alt="about company"
          className="about-company__image"
        />
        <div className="about-company__image-block">
          <div className="about-company__img-container">
            <p className="about-company__vision">REAL BUY's Vision</p>
          </div>
          <p className="about-company__title">
            "상상하는 세상이, 현실이 되는 투자"
          </p>
          <p className="about-company__subtitle">
            누구나 상상하는 세상을 투자를 통해 현실화 시키는 플랫폼이 되고자
            합니다.
          </p>
          <p className="about-company__sub">Invest to realize your dream</p>
        </div>
      </div>
      <div className="be-rich">
        <div className="be-rich__container">
          <p className="be-rich__title">나도 부자가 되고싶다.</p>
          <div className="be-rich__graphs">
            <div className="be-rich__graphs-wrapper">
              <div className="be-rich__content-wrapper">
                <div
                  className="be-rich__text-content1"
                  style={{ color: "#7a7a7a" }}
                >
                  점점 벌어지는 소득 격차
                </div>
                <div className="be-rich__image-container1">
                  <img
                    src={beRichFirstGraph}
                    alt="rich"
                    className="be-rich__image"
                  />
                </div>
              </div>
              <div className="be-rich__content-wrapper">
                <div
                  className="be-rich__text-content2"
                  style={{ color: "#7a7a7a" }}
                >
                  낮은 금융소득으로는 부자가 될 수 없다
                </div>
                <div className="be-rich__image-container2">
                  <img
                    src={beRichSecondGraph}
                    alt="rich"
                    className="be-rich__image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="be-rich__subtitle">
            근로 소득만으로 아파트 가격 상승률을 따라가기 힘든 시기입니다. (근로
            소득 &lt; 자본 소득) 저성장 기조가 장기화되면서 낮은 금융 소득으로
            부자가 될 수 없습니다.
          </div>
          <div className="be-rich__inline">
            <p className="be-rich__text">벌어지는 소득격차의 해결방안</p>
            <img src={arrow} alt="arrow" className="be-rich__arrow" />
            <p className="be-rich__text be-rich__text-underline">
              상업용 부동산 투자 안전하고 높은 수익으로 부자의 꿈을 실현해보세요
            </p>
          </div>
        </div>
      </div>
      <div className="goal">
        <div className="goal__container">
          <div className="goal__pic-container">Real Buy 의 목표</div>
          <Grid container className="goal__icons-container">
            <Grid item direction="column" className="goal__icons-subcontainer">
              <img src={umbrella} alt="umb" className="goal__icons-icon" />
              <div className="goal__icons-title">고객 이익 보호</div>
              <div className="goal__icons-subtitle">
                고객의 이익을 보호하기 위해 최선의 서비스 제공
              </div>
            </Grid>

            <Grid item direction="column" className="goal__icons-subcontainer">
              <img src={money} alt="mon" className="goal__icons-icon" />
              <div className="goal__icons-title">금융 수익 증대</div>
              <div className="goal__icons-subtitle">
                안정적인 실물자산 투자를 통해 높은 금융소득을 제공
              </div>
            </Grid>

            <Grid
              item
              direction="column"
              className="goal__icons-subcontainer"
              style={{ border: "none" }}
            >
              <img src={compass} alt="com" className="goal__icons-icon" />
              <div className="goal__icons-title">투자 편의 확대</div>
              <div className="goal__icons-subtitle">
                투자가 어려운 고객들에게 간편투자 맞춤형 상품을 제공하며 투자
                편의 확대
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="mission">
        <div className="mission__container">
          <div className="mission__pic-container">
            <p className="mission__pic-text">REAL BUY's Mission</p>
          </div>
          <p className="mission__text">
            “세상 모든 데이터를 체계화하여” <br />
            투자를 쉽게 만들어 주는 플랫폼
          </p>
        </div>
      </div>
      <div className="platform">
        <div className="platform__container">
          <p className="platform__title">AI기반 실물자산 투자 플랫폼</p>
          <p className="platform__subtitle">
            1. 글로벌 투자 Data를 체계적으로 분석하여 시장 변화와 성장성을 먼저
            감지합니다.
            <br />
            2. 글로벌 실물투자 Trend를 분석하여 최적의 상품을 확보합니다.
            <br />
            3. 투자자 성향에 맞춰 확보한 상품을 공급합니다.
          </p>
          <img src={platform} alt="platform" className="platform__pic" />
        </div>
      </div>
      <Footer mode="dark" />
    </div>
  );
};

export default AboutCompany;
