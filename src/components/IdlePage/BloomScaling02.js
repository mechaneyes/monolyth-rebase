import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5
// https://github.com/Gherciu/react-p5

// https://p5js.org/examples/transform-scale.html

const pacificState = (p5) => {
  let circs = [];
  let hasRun = false;
  let scaler = [];
  let diameter = [];

  const colorsBubblegum = [
    "#052D3E",
    "#4D9BA6",
    "#F4C127",
    "#D87D0F",
    "#A63305",
  ];
  let randoColor;
  let c;

  let a = 0.0;
  let b = 0.0;
  let f = 0.0;
  let scalerXone = 0.0;
  let scalerXtwo = 0.0;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(30);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noStroke();
    p5.background("black");

    generate(p5);
  };

  let generate = (p5) => {
    circs = [];

    for (let i = 0; i < 22; i++) {
      randoColor =
        colorsBubblegum[Math.floor(Math.random() * colorsBubblegum.length)];
      c = p5.color(randoColor);
      c.setAlpha(p5.random(160, 255));
      p5.fill(c);

      var circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: p5.random(50, 100),
        color: c,
        scaler: p5.random(100, 500),
      };
      circs.push(circle);
    }
  };

  const draw = (p5) => {
    p5.background("black");

    while (!hasRun) {
      for (let i = 0; i < circs.length; i++) {
        scaler[i] = p5.cos(circs[i].scaler) * 2;
        hasRun = true;
      }
    }

    for (let i = 0; i < circs.length; i++) {
      p5.fill(circs[i].color);
      p5.circle(circs[i].x, circs[i].y, p5.cos(scaler[i]) * 300);
    //   console.log('p5.cos(scaler[1])', p5.cos(scaler[1]) * 300)

      scaler[i] += 0.03;
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
