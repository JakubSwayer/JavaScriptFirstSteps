var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
  x: undefined,
  y: undefined
}

var colorArray = [
  '#10454F',
  '#506266',
  '#818274',
  '#A3AB78',
  '#BDE038',
]

  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x);
    console.log(mouse.y);
  });

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.minRadius = radius;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random()*5)]

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.lineWidth = 3;
    c.strokeStyle = `rgba(0, ${255*(this.x/innerWidth)}, ${255*(this.y/innerHeight)}, 1)`;
    c.fillStyle = this.color;
    c.fill();
    // c.stroke();
  }

  this.update = function() {
    if (this.x + 30 >= innerWidth || this.x - 30 <= 0) {
      this.dx = -this.dx;
    }

    if (this.y + 30 >= innerHeight || this.y - 30 <= 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;


    if (mouse.x - this.x < 150 && mouse.x - this.x > -150 && mouse.y - this.y < 150 && mouse.y - this.y > -150 && this.radius < 40 )
    {
      this.radius += 1;
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

var circle_1 = new Circle(200, 200, 2, 2, radius);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var j = 0; j < circle.length; j++){
    circle[j].update();
  }

}



var circle = [];

  for (var i = 0; i < 800; i++) {
  var losowy_x = Math.ceil((Math.random() * (innerWidth - 60) + 30));
  var losowy_y = Math.ceil((Math.random() * (innerHeight - 60) + 30));

  var losowy_dx = (Math.random() - 0.5) *4;
  var losowy_dy = (Math.random() - 0.5) *4;

  // console.log(losowy_x);
  // console.log(losowy_y);
  console.log(losowy_dx);
  console.log(losowy_dy);

  var radius = Math.floor(Math.random()*4 + 1);

  circle.push(new Circle(losowy_x, losowy_y, losowy_dx, losowy_dy, radius));
  }


  animate();
