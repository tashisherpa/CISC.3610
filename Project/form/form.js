window.onload = function () {
  const storedWeight = localStorage.getItem("weight");
  if (storedWeight) {
    document.getElementById("weight").value = storedWeight;
  }

  const storedPlanet = sessionStorage.getItem("planet");
  if (storedPlanet) {
    document.querySelector(
      `input[name="planet"][value="${storedPlanet}"]`
    ).checked = true;
    changeBackground(storedPlanet);
  }
};

function calculateWeight() {
  const weight = parseFloat(document.getElementById("weight").value);
  const planet = document.querySelector('input[name="planet"]:checked').value;
  localStorage.setItem("weight", weight);
  sessionStorage.setItem("planet", planet);

  const gravityValues = {
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
  };

  const gravity = gravityValues[planet];
  const weightOnPlanet = weight * gravity;
  changeBackground(planet);
  document.getElementById("result").innerHTML = `Your weight on ${
    planet.charAt(0).toUpperCase() + planet.slice(1)
  } is <strong>${weightOnPlanet.toFixed(2)} kg</strong>.`;
}

function resetForm() {
  localStorage.removeItem("weight");
  sessionStorage.removeItem("planet");
  document.getElementById("weight").value = "";
  document.querySelector('input[name="planet"][value="earth"]').checked = true;
  document.getElementById("result").innerHTML = "";
}

function changeBackground(planet) {
  document.body.className = `background-${planet}`;
}
