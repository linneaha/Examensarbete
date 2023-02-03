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
        borderRadius: 12,
        data: averageStatsForActivity.map((activity) =>
          convertToMinutes(activity.averageActiveTime)
        ),
        backgroundColor: "rgba(67,152,209,255)",
      },
      {
        label: "Time at first break",
        borderRadius: 12,
        data: averageStatsForActivity.map((activity) =>
          convertToMinutes(activity.averageTotalTime)
        ),
        backgroundColor: "rgba(151,211,230,255)",
      },
    ],
  };

  const breakTimeData = {
    labels: averageStatsForActivity.map((activity) => activity.name),
    datasets: [
      {
        label: "Break (min)",
        borderRadius: 12,
        data: averageStatsForActivity.map((activity) =>
          convertToMinutes(activity.averageBreakTime)
        ),
        backgroundColor: "rgba(247,114,25,255)",
      },
    ],
  };

  const amountOfBreaksData = {
    labels: averageStatsForActivity.map((activity) => activity.name),
    datasets: [
      {
        label: "Amount of Breaks",
        borderRadius: 12,
        data: averageStatsForActivity.map(
          (activity) => activity.averageAmountOfBreaks
        ),
        backgroundColor: "rgba(26, 156, 34)",
        
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
