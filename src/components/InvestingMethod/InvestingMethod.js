import React from "react";
import "./InvestingMethod.sass";
import firstMethod from "./../../assets/icons/InvestingMethod/method-1.svg";
import secondMethod from "./../../assets/icons/InvestingMethod/method-2.svg";
import thirdMethod from "./../../assets/icons/InvestingMethod/method-3.svg";
import fourthMethod from "./../../assets/icons/InvestingMethod/method-4.svg";
import fifthMethod from "./../../assets/icons/InvestingMethod/method-5.svg";
import sixthMethod from "./../../assets/icons/InvestingMethod/method-6.svg";
import numberOne from "./../../assets/icons/InvestingMethod/1.png";
import numberTwo from "./../../assets/icons/InvestingMethod/2.png";
import numberThree from "./../../assets/icons/InvestingMethod/3.png";
import numberFour from "./../../assets/icons/InvestingMethod/4.png";
import numberFive from "./../../assets/icons/InvestingMethod/5.png";
import numberSix from "./../../assets/icons/InvestingMethod/6.png";
import Footer from "./../Footer/Footer";

const InvestingMethod = () => {
  return (
    <>
      <div className="investing-method">
        <div className="investing-method__container">
          <span>
            <div className="investing-method__container-block">
              <div className="investing-method__container-block-title">
                Real Buy 와 함께
              </div>
              <div className="investing-method__container-block-title">
                부동산 투자의 꿈을 실현해보세요
              </div>
            </div>
            <div className="investing-method__container-block">
              <div
                className="investing-method__pic-block"
                style={{ position: "relative" }}
              >
                <img
                  src={firstMethod}
                  alt="first method"
                  className="investing-method__left-icon"
                />
                <img
                  src={numberOne}
                  alt="number one"
                  className="investing-method__full-img"
                />
                <div className="investing-method__text-leftcontainer">
                  <div className="investing-method__text-lefttitle">
                    01. First
                  </div>
                  <div className="investing-method__text-leftsubtitle">
                    회원가입 하기
                  </div>
                  <div className="investing-method__text-leftsub">
                    REAL BUY는 우수한 투자 기회를 제공합니다.
                  </div>
                </div>

                <div className="investing-method__button-right-container">
                  <button className="investing-method__button-right investing-method__button">
                    REAL BUY 회원가입
                  </button>
                </div>
                <div className="investing-method__container-large">
                  <button className="investing-method__button-right investing-method__button">
                    REAL BUY 회원가입
                  </button>
                </div>
              </div>

              <div
                className="investing-method__pic-block"
                style={{ position: "relative" }}
              >
                <img
                  src={numberTwo}
                  alt="number one"
                  className="investing-method__number-left investing-method__full-img"
                />
                <img
                  src={secondMethod}
                  alt="first method"
                  className="investing-method__right-icon"
                />
                <div className="investing-method__text-rightcontainer">
                  <div className="investing-method__text-righttitle">
                    02. Second
                  </div>
                  <div className="investing-method__text-rightsubtitle">
                    가상계좌 개설하기
                  </div>
                  <div className="investing-method__text-rightsub">
                    믿을 수 있는 금융과 함께 합니다.
                  </div>
                </div>
                <div className="investing-method__button-container">
                  <button className="investing-method__button-left investing-method__button">
                    가상계좌 개설 및 확인
                  </button>
                </div>
                <div className="investing-method__container-large">
                  <button className="investing-method__button-left investing-method__button">
                    가상계좌 개설 및 확인
                  </button>
                </div>
              </div>

              <div
                className="investing-method__pic-block"
                style={{ position: "relative" }}
              >
                <img
                  src={thirdMethod}
                  alt="first method"
                  className="investing-method__left-icon"
                />
                <img
                  src={numberThree}
                  alt="number one"
                  className="investing-method__full-img"
                />
                <div className="investing-method__text-leftcontainer">
                  <div className="investing-method__text-lefttitle">
                    03. Third
                  </div>
                  <div className="investing-method__text-leftsubtitle">
                    투자상품 확인하기
                  </div>
                  <div className="investing-method__text-leftsub">
                    REAL BUY는 우수한 투자 기회를 제공합니다.
                  </div>
                </div>
                <div className="investing-method__button-right-container">
                  <button className="investing-method__button-right investing-method__button">
                    투자상품 확인
                  </button>
                </div>
                <div className="investing-method__container-large">
                  <button className="investing-method__button-right investing-method__button">
                    투자상품 확인
                  </button>
                </div>
              </div>
              <div
                className="investing-method__pic-block"
                style={{ position: "relative" }}
              >
                <img
                  src={numberFour}
                  alt="number one"
                  className="investing-method__number-left investing-method__full-img"
                />
                <img
                  src={fourthMethod}
                  alt="first method"
                  className="investing-method__right-icon"
                />
                <div className="investing-method__text-rightcontainer">
                  <div className="investing-method__text-righttitle">
                    04. Fourth
                  </div>
                  <div className="investing-method__text-rightsubtitle">
                    투자하기
                  </div>
                  <div className="investing-method__text-rightsub">
                    진정한 건물주가 되어보세요!
                  </div>
                </div>
                <div className="investing-method__button-container">
                  <button className="investing-method__button-left investing-method__button">
                    투자하기
                  </button>
                </div>
                <div className="investing-method__container-large">
                  <button className="investing-method__button-left investing-method__button">
                    투자하기
                  </button>
                </div>
              </div>
              <div
                className="investing-method__pic-block"
                style={{ position: "relative" }}
              >
                <img
                  src={fifthMethod}
                  alt="first method"
                  className="investing-method__left-icon"
                />
                <img
                  src={numberFive}
                  alt="number one"
                  className="investing-method__full-img"
                />
                <div className="investing-method__text-leftcontainer">
                  <div className="investing-method__text-lefttitle">
                    05. Fifth
                  </div>
                  <div className="investing-method__text-leftsubtitle">
                    투자 내역 확인하기
                  </div>
                  <div className="investing-method__text-leftsub">
                    투자한 상품을 확인하세요!
                  </div>
                </div>
                <div className="investing-method__button-right-container">
                  <button className="investing-method__button-right investing-method__button">
                    투자 내역
                  </button>
                </div>
                <div className="investing-method__container-large">
                  <button className="investing-method__button-right investing-method__button">
                    투자 내역
                  </button>
                </div>
              </div>
              <div
                className="investing-method__pic-block"
                style={{ position: "relative" }}
              >
                <img
                  src={numberSix}
                  alt="number one"
                  className="investing-method__number-left investing-method__full-img"
                />
                <img
                  src={sixthMethod}
                  alt="first method"
                  className=" investing-method__right-icon"
                />
                <div className="investing-method__text-rightcontainer">
                  <div className="investing-method__text-righttitle">
                    06. Sixth
                  </div>
                  <div className="investing-method__text-rightsubtitle">
                    투자 현황 확인하기
                  </div>
                  <div className="investing-method__text-rightsub">
                    투자 현황과 예상 수익금을 확인 하세요
                  </div>
                </div>
                <div className="investing-method__button-container">
                  <button className="investing-method__button-left investing-method__button">
                    마이페이지
                  </button>
                </div>
                <div className="investing-method__container-large">
                  <button className="investing-method__button-left investing-method__button">
                    마이페이지
                  </button>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <Footer mode="light" />
    </>
  );
};

export default InvestingMethod;
