import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5
// https://github.com/Gherciu/react-p5

// https://p5js.org/examples/transform-scale.html

const pacificState = (p5) => {
  let circs = [];
  let hasRun = false;
  let scaler = [];
  let shrinkRate;
  let isShrinking = false;

  const colorsBubblegum = [
    "#052D3E",
    "#4D9BA6",
    "#F4C127",
    "#D87D0F",
    "#A63305",
  ];
  let randoColor;
  let c;
  let isCollapsed = false;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(30);
    const can = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    p5.noStroke();
    p5.background("black");
    can.mousePressed(collapse);

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

  let collapse = (p5) => {
    isCollapsed = !isCollapsed;
    console.log("isCollapsed", isCollapsed);
  };
  let x;

  const killCircles = (origDiameter, p5) => {
    shrinkRate = origDiameter
    if (shrinkRate < 0) {
        shrinkRate = shrinkRate * -1
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
      p5.circle(
        circs[2].x,
        circs[2].y,
        isCollapsed ? shrinkRate : p5.cos(scaler[2]) * 300
      );

      scaler[i] += 0.03;
      console.log('shrinkRate', shrinkRate)
    }

    if (isCollapsed) {
      while (!isShrinking) {
        killCircles(p5.cos(scaler[2]) * 300, p5);
        isShrinking = true;
      }
    } else {
        console.log(p5.cos(scaler[2]) * 300);
    }

    shrinkRate -= 7
    // console.log('shrinkRate', shrinkRate)
    if (shrinkRate <= 0) {
        p5.noLoop()
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
