// Dataset
const data = {
  labels: [
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "South America",
    "Oceania",
    "Antartica",
  ],
  values: [4.75, 1.46, 0.74, 0.6, 0.44, 0.46, 0],
  color: [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#800080",
  ],
};

new Chart(document.getElementById("bar-chart"), {
  type: "bar",
  data: {
    labels: data.labels,
    datasets: [
      {
        label: "Population (billions)",
        backgroundColor: data.color,
        data: data.values,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "population (billions) in 2023",
    },
  },
});

new Chart(document.getElementById("doughnut-chart"), {
  type: "doughnut",
  data: {
    labels: data.labels,
    datasets: [
      {
        label: "Population (in billions)",
        backgroundColor: data.color,
        data: data.values,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "population(billions) in 2023",
    },
  },
});
