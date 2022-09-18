const dataPie = {
  labels: ["Ms Word","Ms Excel", "Photoshop", "Illustrator"],
  datasets: [
    {
      label: "My First Dataset",
      data: [150, 150, 50, 100],
      backgroundColor: ["rgb(133, 105, 241)", "rgb(100, 150, 175)", "rgb(164, 101, 241)", "rgb(101, 143, 241)"],
      hoverOffset: 4,
    },
  ],
};

const configPie = {
  type: "pie",
  data: dataPie,
  options: {},
};

var chartBar = new Chart(document.getElementById("chartPie"), configPie);
