window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");

  context.fillStyle = "#67b4d2";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#875a4a";
  context.strokeStyle = "#282d27";

  //fence
  context.lineWidth = 2;
  context.fillStyle = "#266b85";
  context.strokeStyle = "#1d465f";
  context.fillRect(0, 365, canvas.width, 173);
  context.strokeRect(-1, 365, canvas.width + 2, 173);
  context.strokeStyle = "#1f1d1f";
  context.fillRect(0, 364, canvas.width, 10);
  context.strokeRect(-1, 364, canvas.width + 2, 10);
  context.fillStyle = "#498ba1";
  context.fillRect(0, 365, canvas.width, 3);

  context.strokeStyle = "#1d526b";

  for (let i = -105; i <= 700; i += 35) {
    let x1 = i;
    let x2 = i + 140;
    let y1 = 374;
    let y2 = 538;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  for (let i = 35; i <= 805; i += 35) {
    let x1 = i;
    let x2 = i - 140;
    let y1 = 374;
    let y2 = 538;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  //sidewalk
  context.fillStyle = "#2fb6d9";
  context.fillRect(0, 538, canvas.width, 55);

  context.strokeStyle = "#24a1c8";
  for (let i = 538; i <= 593; i += 10) {
    let x1 = 0;
    let x2 = canvas.width;
    let y1 = i;
    let y2 = i;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  context.strokeStyle = "#1f1d1f";
  context.beginPath();
  context.moveTo(0, 538);
  context.lineTo(canvas.width, 538);
  context.stroke();

  //bus stop shadow
  context.beginPath();

  x1 = 84;
  y1 = 569;
  a1 = 20;
  b1 = 4;

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#1a2532";
  context.fill();

  //bus stop
  context.fillStyle = "#435d5c";
  context.strokeStyle = "#243232";
  context.fillRect(80, 160, 8, 410);
  context.strokeRect(80, 160, 8, 410);
  context.fillStyle = "#4773cc";
  context.strokeStyle = "#223859";
  context.beginPath();
  context.arc(84, 140, 60, 0, Math.PI * 2, true);
  context.fill();
  context.stroke();

  var image = new Image();
  image.onload = function () {
    context.drawImage(image, 50, 94, 70, 94);
  };
  image.src = "./bus_stop.png";

  //window
  context.fillStyle = "#266b85";
  context.fillRect(400, 130, 300, 200);
  context.strokeRect(400, 130, 300, 200);
  context.fillStyle = "#498ba1";
  context.fillRect(420, 150, 120, 70);
  context.fillRect(570, 150, 120, 70);
  context.fillRect(420, 240, 120, 70);
  context.fillRect(570, 240, 120, 70);

  //bunny shadow
  context.beginPath();

  x1 = 300;
  y1 = 575;
  a1 = 73;
  b1 = 15;

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#1a2532";
  context.fill();

  //bear shadow
  context.beginPath();

  x1 = 447;
  y1 = 560;
  a1 = 80;
  b1 = 18;

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#1a2532";
  context.fill();

  //sidewalk edge
  context.fillStyle = "#5dabbe";
  context.strokeStyle = "#1f1d1f";
  for (let i = 0; i <= 805; i += 100) {
    let x = i;
    let y = 590;
    let width = 25;
    let length = 100;
    context.fillRect(x, y, length, width);
    context.strokeRect(x, y, length, width);
  }
  context.fillStyle = "#7abeda";
  for (let i = 2; i <= 805; i += 100) {
    let x = i;
    let y = 590;
    let width = 10;
    let length = 96;
    context.fillRect(x, y, length, width);
  }
  context.fillStyle = "#4792af";
  for (let i = 2; i <= 805; i += 100) {
    let x = i;
    let y = 610;
    let width = 4;
    let length = 96;
    context.fillRect(x, y, length, width);
  }

  //road
  context.fillStyle = "#2684a8";
  context.fillRect(0, 615, canvas.width, 100);
  context.fillStyle = "#6bb7d1";
  context.fillRect(0, 645, canvas.width, 15);
  context.strokeRect(-4, 645, canvas.width + 8, 15);

  //bunny body
  context.lineWidth = 3;
  context.fillStyle = "#ceddf4";
  context.strokeStyle = "#364553";
  context.fillRect(258, 465, 80, 70);
  //left leg base
  context.fillRect(258, 535, 38, 40);
  //right leg base
  context.save();

  x = 300;
  y = 535;
  a = 38;
  b = 40;

  var tiltAngle = -Math.PI / 20;

  context.translate(x, y);
  context.rotate(tiltAngle);
  context.translate(-x, -y);

  context.lineWidth = 2;
  context.fillRect(x, y, a, b);

  context.restore();

  //inner outline
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(297, 535);
  context.lineTo(297, 575);
  context.moveTo(299, 535);
  context.lineTo(305, 575);
  context.stroke();

  //bunny arms
  //left arm
  context.beginPath();
  context.moveTo(259, 465);
  context.bezierCurveTo(242, 480, 232, 515, 256, 522);
  context.fill();
  context.stroke();
  //right arm
  context.beginPath();
  context.moveTo(337, 465);
  context.bezierCurveTo(354, 478, 368, 514, 338, 522);
  context.fill();
  context.stroke();

  //bunny feet
  //left foot
  context.beginPath();
  context.moveTo(258, 575);
  context.bezierCurveTo(244, 590, 296, 590, 297, 575);
  context.fill();
  context.stroke();
  //right foot
  context.beginPath();
  context.moveTo(305, 575);
  context.bezierCurveTo(310, 590, 365, 578, 343, 567);
  context.fill();
  context.stroke();

  //bunny body left side
  context.beginPath();
  context.moveTo(258, 575);
  context.bezierCurveTo(256, 540, 256, 515, 258, 485);
  context.fill();
  context.stroke();

  //bunny body rigth side
  context.beginPath();
  context.moveTo(343, 567);
  context.bezierCurveTo(340, 530, 338, 515, 339, 479);
  context.fill();
  context.stroke();

  //bunny head
  context.lineWidth = 4;
  context.beginPath();

  x1 = 298;
  y1 = 408;
  a1 = 98;
  b1 = 66;

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#ceddf4";
  context.strokeStyle = "#314353";
  context.stroke();
  context.fill();

  //bunny ears
  //bunny right ear
  context.lineWidth = 4;
  context.fillStyle = "#ceddf4";
  context.strokeStyle = "#314353";
  context.beginPath();
  context.moveTo(305, 343);
  context.bezierCurveTo(310, 275, 345, 268, 325, 346);
  context.stroke();
  context.fill();

  //bunny right inner
  context.lineWidth = 4;
  context.fillStyle = "#b6658a";
  context.strokeStyle = "#b27992";
  context.beginPath();
  context.moveTo(312, 344);
  context.bezierCurveTo(320, 284, 334, 279, 317, 345);
  context.stroke();
  context.fill();

  //bunny left ear
  context.lineWidth = 4;
  context.fillStyle = "#ceddf4";
  context.strokeStyle = "#314353";
  context.beginPath();
  context.moveTo(273, 345);
  context.bezierCurveTo(278, 270, 306, 268, 293, 342);
  context.stroke();
  context.fill();

  //bunny left inner
  context.lineWidth = 4;
  context.fillStyle = "#b6658a";
  context.strokeStyle = "#b27992";
  context.beginPath();
  context.moveTo(281, 344);
  context.bezierCurveTo(286, 278, 298, 276, 285, 343);
  context.stroke();
  context.fill();

  //bunny eyes
  //left eye
  context.lineWidth = 2.5;
  context.strokeStyle = "#314353";
  context.beginPath();
  context.moveTo(291, 398);
  context.bezierCurveTo(293, 417, 275, 415, 278, 397);
  context.stroke();

  //right eye
  context.strokeStyle = "#314353";
  context.beginPath();
  context.moveTo(304, 398);
  context.bezierCurveTo(302, 415, 320, 417, 317, 397);
  context.stroke();

  //bunny eye brows
  //left
  context.beginPath();
  context.moveTo(289, 375);
  context.bezierCurveTo(284, 373, 280, 374, 276, 380);
  context.stroke();

  //right
  context.beginPath();
  context.moveTo(309, 375);
  context.bezierCurveTo(304, 373, 315, 374, 319, 380);
  context.stroke();

  //bunny nose
  context.beginPath();
  context.arc(297, 418, 4, 0, Math.PI * 2, true);
  context.stroke();

  context.beginPath();
  context.moveTo(297, 421);
  context.lineTo(297, 433);
  context.stroke();

  //bunny mouth
  context.beginPath();
  context.moveTo(286, 426);
  context.bezierCurveTo(291, 435, 303, 435, 308, 426);
  context.stroke();

  //bunny blush
  context.beginPath();

  x1 = 265;
  y1 = 420;
  a1 = 12;
  b1 = 5;

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#bf95b2";
  context.fill();

  context.beginPath();

  x1 = 331;
  y1 = 420;
  a1 = 12;
  b1 = 5;

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#bf95b2";
  context.fill();

  //bear arms
  //right arm
  context.lineWidth = 4;
  context.fillStyle = "#885a4a";
  context.strokeStyle = "#3b221e";
  context.beginPath();
  context.moveTo(495, 438);
  context.bezierCurveTo(540, 495, 500, 520, 495, 505);
  context.stroke();
  context.fill();
  //left arm
  context.beginPath();
  context.moveTo(400, 439);
  context.bezierCurveTo(340, 418, 340, 470, 400, 480);
  context.stroke();
  context.fill();

  //umbrella handle
  context.save();

  x = 306;
  y = 235;
  a = 6;
  b = 200;

  var tiltAngle = -Math.PI / 12;

  context.translate(x, y);
  context.rotate(tiltAngle);
  context.translate(-x, -y);

  context.lineWidth = 2;
  context.fillStyle = "#607b7e";
  context.strokeStyle = "#1e3439";
  context.fillRect(x, y, a, b);
  context.strokeRect(x, y, a, b);

  context.restore();

  context.save();

  x = 355;
  y = 425;
  a = 10;
  b = 50;

  // Define a small negative angle in radians to tilt the shape slightly to the left
  var tiltAngle = -Math.PI / 12;

  // Apply rotation transformation
  context.translate(x, y);
  context.rotate(tiltAngle);
  context.translate(-x, -y);

  context.lineWidth = 2;
  context.fillStyle = "#e2b734";
  context.strokeStyle = "#3b3c29";
  context.fillRect(x, y, a, b);
  context.strokeRect(x, y, a, b);

  context.restore();

  //umbrella top
  context.lineWidth = 2;
  context.fillStyle = "#e2b734";
  context.strokeStyle = "#3b3c29";
  context.beginPath();
  context.moveTo(176, 310);
  context.bezierCurveTo(236, 160, 360, 160, 456, 220);
  context.fill();
  context.stroke();

  //top of umbrella rectangle
  context.save();

  x = 287;
  y = 170;
  a = 5;
  b = 20;

  // a small negative angle in radians to tilt the shape slightly to the left
  var tiltAngle = -Math.PI / 11;

  // Apply rotation transformation
  context.translate(x, y);
  context.rotate(tiltAngle);
  context.translate(-x, -y);

  context.lineWidth = 2;
  context.fillStyle = "#e2b734";
  context.strokeStyle = "#3b3c29";
  context.fillRect(x, y, a, b);
  context.strokeRect(x, y, a, b);

  context.restore();

  //umbrella curves fill
  context.beginPath();
  context.moveTo(266, 291);
  context.bezierCurveTo(276, 280, 290, 265, 238, 290);
  context.fill();

  context.beginPath();
  context.moveTo(266, 291);
  context.bezierCurveTo(268, 280, 290, 265, 300, 268);
  context.fill();

  context.beginPath();
  context.moveTo(378, 257);
  context.bezierCurveTo(340, 245, 400, 220, 398, 238);
  context.fill();

  context.beginPath();
  context.moveTo(374, 256);
  context.bezierCurveTo(360, 245, 360, 220, 333, 260);
  context.fill();

  context.beginPath();
  context.moveTo(469, 230);
  context.bezierCurveTo(460, 225, 450, 210, 435, 227);
  context.fill();

  context.beginPath();
  context.moveTo(172, 320);
  context.bezierCurveTo(180, 300, 180, 300, 195, 305);
  context.fill();

  //umbrella curves
  context.beginPath();
  context.moveTo(266, 292);
  context.bezierCurveTo(305, 257, 380, 254, 376, 258);
  context.stroke();

  context.beginPath();
  context.moveTo(172, 320);
  context.bezierCurveTo(210, 292, 230, 288, 266, 292);
  context.stroke();

  context.beginPath();
  context.moveTo(376, 258);
  context.bezierCurveTo(390, 250, 400, 220, 469, 230);
  context.stroke();

  context.beginPath();
  context.moveTo(172, 320);
  context.lineTo(176, 310);
  context.stroke();

  context.beginPath();
  context.moveTo(469, 230);
  context.lineTo(456, 220);
  context.stroke();

  context.beginPath();
  context.moveTo(266, 288);
  context.bezierCurveTo(260, 250, 265, 220, 292, 193);
  context.stroke();

  context.beginPath();
  context.moveTo(378, 254);
  context.bezierCurveTo(382, 220, 317, 188, 300, 191);
  context.stroke();

  //left hand holding umbrella
  context.beginPath();

  x2 = 365;
  y2 = 449;
  a2 = 20;
  b2 = 20;
  context.moveTo(x2, y2 - b2);

  context.bezierCurveTo(x2 + a2, y2 - b2, x2 + a2, y2 + b2, x2, y2 + b2);

  context.bezierCurveTo(x2 - a2, y2 + b2, x2 - a2, y2 - b2, x2, y2 - b2);

  context.closePath();

  context.lineWidth = 2;
  context.fillStyle = "#885a4a";
  context.strokeStyle = "#3b221e";
  context.fill();
  context.stroke();

  //bear body
  context.lineWidth = 3;
  context.fillStyle = "#885a4a";
  context.strokeStyle = "#3b221e";
  context.fillRect(400, 420, 95, 100);
  context.fillRect(400, 515, 48, 40);
  context.fillRect(447, 515, 48, 40);
  context.beginPath();
  context.moveTo(447, 515);
  context.lineTo(447, 555);
  context.stroke();
  context.lineWidth = 2.5;
  context.beginPath();
  context.moveTo(400, 472);
  context.bezierCurveTo(398, 500, 398, 515, 400, 555);
  context.stroke();
  context.beginPath();
  context.moveTo(495, 465);
  context.bezierCurveTo(497, 500, 497, 515, 495, 555);
  context.stroke();

  //bear feet
  //left foot
  context.lineWidth = 4;
  context.fillStyle = "#885a4a";
  context.strokeStyle = "#3b221e";
  context.beginPath();
  context.moveTo(400, 555);
  context.bezierCurveTo(388, 575, 443, 575, 445, 555);
  context.stroke();
  context.fill();
  //right foot
  context.beginPath();
  context.moveTo(449, 555);
  context.bezierCurveTo(451, 575, 507, 575, 495, 555);
  context.stroke();
  context.fill();

  //   context.beginPath();
  //   context.moveTo(445, 500);
  //   context.bezierCurveTo(447, 384, 450, 384, , 388);
  //   context.closePath();
  //   context.stroke();
  //   context.fill();

  context.lineWidth = 4;
  //bear head
  context.beginPath();

  x1 = 450;
  y1 = 380;
  a1 = 105;
  b1 = 70;

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#875a4a";
  context.strokeStyle = "#282d27";
  context.stroke();
  context.fill();

  //bear ears
  //right ear base
  context.beginPath();
  context.moveTo(488, 319);
  context.bezierCurveTo(490, 303, 530, 305, 513, 340);
  context.stroke();
  context.fill();

  //right inner
  context.fillStyle = "#1d1f25";
  context.strokeStyle = "#3d261e";
  context.beginPath();
  context.moveTo(496, 322);
  context.bezierCurveTo(499, 312, 516, 314, 508, 332);
  context.stroke();
  context.fill();

  //left ear base
  context.fillStyle = "#875a4a";
  context.strokeStyle = "#282d27";
  context.beginPath();
  context.moveTo(398, 328);
  context.bezierCurveTo(380, 305, 423, 290, 425, 313);
  context.stroke();
  context.fill();

  //left inner
  context.fillStyle = "#1d1f25";
  context.strokeStyle = "#3d261e";
  context.beginPath();
  context.moveTo(406, 320);
  context.bezierCurveTo(393, 314, 415, 300, 417, 315);
  context.stroke();
  context.fill();

  //bear eyes
  //left eye
  context.beginPath();
  context.arc(440, 375, 4, 0, Math.PI * 2, true);
  context.stroke();
  context.fill();
  context.closePath();

  //rigth eye
  context.beginPath();
  context.arc(458, 377, 4, 0, Math.PI * 2, true);
  context.stroke();
  context.fill();
  context.closePath();

  //bear nose/mouth base
  context.beginPath();

  x1 = 446;
  y1 = 398;
  a1 = 20;
  b1 = 17;

  //a small angle in radians to tilt the ellipse
  var tiltAngle = Math.PI / 24;

  // Save the current transformation matrix
  context.save();

  // Apply rotation transformation
  context.translate(x1, y1);
  context.rotate(tiltAngle);
  context.translate(-x1, -y1);

  context.moveTo(x1, y1 - b1);

  context.bezierCurveTo(x1 + a1, y1 - b1, x1 + a1, y1 + b1, x1, y1 + b1);

  context.bezierCurveTo(x1 - a1, y1 + b1, x1 - a1, y1 - b1, x1, y1 - b1);

  context.closePath();

  context.fillStyle = "#bf9f8c";
  context.fill();

  // Restore the original transformation matrix
  context.restore();

  //nose
  context.lineWidth = 1;
  context.fillStyle = "#1d1f25";
  context.strokeStyle = "#1d1f25";
  context.beginPath();
  context.moveTo(446, 392);
  context.lineTo(444, 386);
  context.lineTo(452, 388);
  context.closePath();
  context.stroke();
  context.fill();
  context.beginPath();
  context.moveTo(444, 386);
  context.bezierCurveTo(447, 384, 450, 384, 452, 388);
  context.closePath();
  context.stroke();
  context.fill();
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(447, 391);
  context.lineTo(445, 400);
  context.closePath();
  context.stroke();
  //mouth
  context.beginPath();
  context.moveTo(445, 400);
  context.lineTo(441, 408);
  context.closePath();
  context.stroke();
  context.beginPath();
  context.moveTo(445, 400);
  context.lineTo(449, 407);
  context.closePath();
  context.stroke();

  // //rain
  // // Get canvas element and its 2d context
  // const rain = document.getElementById("rain");
  // const rainCtx = rain.getContext("2d");

  // // Define raindrop properties
  // const rainPath = "raindrop.png";
  // const rainWidth = 200;
  // const rainHeight = 150;
  // const totalFrames = 39;
  // let currentFrame = 0;

  // // Load raindrop sprite sheet
  // const rainSheet = new Image();
  // rainSheet.onload = startAnimation;
  // rainSheet.src = rainPath;

  // // Function to draw raindrop
  // function drawRaindrop(frameIndex) {
  //   rainCtx.clearRect(0, 0, rain.width, rain.height);
  //   const colsPerRow = Math.floor(rainSheet.width / rainWidth);
  //   const col = frameIndex % colsPerRow;
  //   const row = Math.floor(frameIndex / colsPerRow);
  //   rainCtx.drawImage(
  //     rainSheet,
  //     col * rainWidth,
  //     row * rainHeight,
  //     rainWidth,
  //     rainHeight,
  //     0,
  //     0,
  //     rainWidth,
  //     rainHeight
  //   );
  // }

  // // Function to animate raindrop
  // function animate() {
  //   drawRaindrop(currentFrame);
  //   currentFrame = (currentFrame + 1) % totalFrames;
  //   requestAnimationFrame(animate);
  // }

  // // Start animation when raindrop sprite sheet is loaded
  // function startAnimation() {
  //   animate();
  // }
};
