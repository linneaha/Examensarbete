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
        label: "Active time",
        data: averageStatsForActivity.map((activity) =>
          convertToMinutes(activity.averageActiveTime)
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Time at first break",
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
        label: "Break (min)",
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
        label: "Amount of Breaks",
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
                text: "minutes",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Active time",
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
                text: "minutes",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Break",
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
                text: "amount",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Amount of breaks",
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
