var fruitsData = [
  { name: "Apple", quantity: 20, color: "red" },
  { name: "Orange", quantity: 10, color: "orange" },
  { name: "Banana", quantity: 15, color: "yellow" },
  { name: "Kiwi", quantity: 5, color: "brown" },
  { name: "Blueberry", quantity: 5, color: "blue" },
  { name: "Grapes", quantity: 10, color: "green" },
];

var canvas = document.getElementById("chart-container");
var ctx = canvas.getContext("2d");
var barWidth = 80;
var startX = 50;
var startY = 50;

for (var i = 0; i < fruitsData.length; i++) {
  var fruit = fruitsData[i];
  ctx.fillStyle = fruit.color;
  ctx.fillRect(startX, startY + i * barWidth, fruit.quantity * 27, barWidth);
  ctx.fillStyle = "black";
  ctx.font = "25px times";
  ctx.fillText(
    fruit.name,
    startX + 16,
    startY + i * barWidth + barWidth / 2 - 8
  );

  ctx.fillText(
    fruit.quantity,
    startX + 16,
    startY + i * barWidth + barWidth - 8
  );
}
