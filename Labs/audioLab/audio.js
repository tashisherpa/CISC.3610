function playAudio(areaId) {
  var audioId = areaId + "-sound";
  var audio = document.getElementById(audioId);
  audio.currentTime = 0; // Reset audio to the beginning to allow rapid clicking
  audio.play();
}

// Add event listeners to each area in the image map
var areas = document.querySelectorAll("map area");
areas.forEach(function (area) {
  area.addEventListener("click", function () {
    playAudio(this.id);
  });
});
