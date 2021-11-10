import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5
// https://github.com/Gherciu/react-p5

// https://p5js.org/examples/transform-scale.html


const pacificState = (p5) => {
  let circs = [];

  const colorsBubblegum = [
    "#052D3E",
    "#4D9BA6",
    "#F4C127",
    "#D87D0F",
    "#A63305",
  ];
  const fillColor = colorsBubblegum;
  let randoColor;
  let c;

  var a = 0.0
  let scaler = 0.0

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(30);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noStroke();
    p5.background("black");

    for (let i = 0; i < 20; i++) {
      randoColor = fillColor[Math.floor(Math.random() * fillColor.length)];
      c = p5.color(randoColor);
      p5.fill(c);
      var circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: p5.random(50, 100),
        color: c
      }
      circs.push(circle)
    }
  };

  const draw = (p5) => {
    p5.background('black')

    a = a + 0.03;
    scaler = p5.cos(a) * 2
    
    for (let i = 0; i < circs.length; i++) {
      p5.fill(circs[i].color)
      p5.circle(circs[i].x, circs[i].y, circs[i].r * scaler)
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
