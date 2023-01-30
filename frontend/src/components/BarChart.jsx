import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';

const BarChart = ({ averageStatsForActivity }) => {
  Chart.register(...registerables);
  
  const convertToMinutes = (duration) => {
    var minutes = Math.floor(duration / 1000 / 60);
    return minutes;
  };

  const activeTimeData = {
    labels: averageStatsForActivity.map((activity) => activity.name),
    datasets: [
      {
        label: "Aktiv tid",
        data: averageStatsForActivity.map((activity) =>
          convertToMinutes(activity.averageActiveTime)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Tid vid första paus",
        data: averageStatsForActivity.map((activity) =>
          convertToMinutes(activity.averageTimeBeforeFirstBreak)
        ),
        backgroundColor: "rgb(255, 199, 176, 0.5)",
      },
    ],
  };

  const breakTimeData = {
    labels: averageStatsForActivity.map((activity) => activity.name),
    datasets: [
      {
        label: "Paus (min)",
        data: averageStatsForActivity.map((activity) =>
          convertToMinutes(activity.averageBreakTime)
        ),
        backgroundColor: "rgb(255, 99, 71)",
      },
    ],
  };

  const amountOfBreaksData = {
    labels: averageStatsForActivity.map((activity) => activity.name),
    datasets: [
      {
        label: "Antal pauser",
        data: averageStatsForActivity.map(
          (activity) => activity.averageAmountOfBreaks
        ),
        backgroundColor: "rgb(73, 152, 45)",
      },
    ],
  };

  return (
    <>
      <Bar
        data={activeTimeData}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: "minuter",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Aktiv tid",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <Bar
        data={breakTimeData}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: "minuter",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Paus",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      <Bar
        data={amountOfBreaksData}
        options={{
          scales: {
            y: {
              title: {
                display: true,
                text: "antal",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Antal pauser",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
};

export default BarChart;
