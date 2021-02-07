import React from "react";
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";

const BarGraph = () => {
  let barBackground;

  let context = document.getElementById("firstGraph");
  if (context) {
    let gradient = context.getContext("2d");
    barBackground = gradient.createLinearGradient(0, 0, 50, 300);
    barBackground.addColorStop(0, "#43cbff");
    barBackground.addColorStop(1, "#3769fc");
  }

  const data = {
    labels: [
      "1기",
      "2기",
      "3기",
      "4기",
      "5기",
      "6기",
      "7기",
      "8기",
      "9기",
      "10기",
    ],
    datasets: [
      {
        backgroundColor: barBackground,
        data: [7.3, 8.5, 8.6, 8.5, 8.6, 8.5, 8.6, 8.5, 8.6, 10.0],
        maxBarThickness: 25,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],

      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            beginAtZero: true,
            stepSize: 3,
            callback: function (value) {
              return value + "%";
            },
          },
        },
      ],
    },
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: true,
    },
    plugins: {
      datalabels: {
        display: true,
        color: "black",
        anchor: "end",
        align: "top",
        offset: -1,
      },
    },
  };

  let width = window.innerWidth;
  let height = window.innerHeight;

  const myWidth = () => {
    if (width >= 800 && width < 1920) {
      return 700;
    } else if (width < 800 && width > 500) {
      return 500;
    } else if (width < 500) {
      return 325;
    }
  };

  const myHeight = () => {
    if (width >= 800) {
      return 300;
    } else if (width < 800) {
      return 200;
    }
  };

  return (
    <div style={{ padding: "0px 0px 0px 0px" }}>
      <Bar
        data={data}
        id="firstGraph"
        options={options}
        width={myWidth()}
        height={myHeight()}
      />
    </div>
  );
};

export default BarGraph;
