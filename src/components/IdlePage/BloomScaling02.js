import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5
// https://github.com/Gherciu/react-p5

// https://p5js.org/examples/transform-scale.html

const pacificState = (p5) => {
  let circs = [];
  let circle;
  let scaler = [];
  let shrinkRate;
  let hasRun = false;
  let isShrinking = false;
  let isCollapsed = false;
  let popCount;
  let popRate = 0;

  const colorsBubblegum = [
    "#052D3E",
    "#4D9BA6",
    "#F4C127",
    "#D87D0F",
    "#A63305",
  ];
  let randoColor;
  let color;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(24);
    const can = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    p5.noStroke();
    p5.background("black");
    can.mousePressed(collapse);

    generate(p5);
  };

  let generate = (p5) => {
    for (let i = 0; i < 3; i++) {
    //   randoColor =
    //     colorsBubblegum[Math.floor(Math.random() * colorsBubblegum.length)];
    //   color = p5.color(randoColor);
    //   color.setAlpha(p5.random(160, 255));
    //   p5.fill(color);

    selectColor(p5)

      circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: p5.random(50, 100),
        color: color,
        scaler: p5.random(100, 500),
      };
      circs.push(circle);
    }
  };

  let generateSingle = (p5) => {
    circle = {
      x: p5.random(p5.windowWidth),
      y: p5.random(p5.windowHeight),
      r: p5.random(50, 100),
      color: color,
      scaler: p5.random(100, 500),
    };
    console.log("circle", circle);
    circs.push(circle);
  };

  let selectColor = (p5) => {
    randoColor =
      colorsBubblegum[Math.floor(Math.random() * colorsBubblegum.length)];
    color = p5.color(randoColor);
    color.setAlpha(p5.random(160, 255));
    p5.fill(color);
  };

  // Circles running in draw()
  //
  let runCircles = (p5, i) => {
    p5.fill(circs[i].color);
    p5.circle(
      circs[i].x,
      circs[i].y,
      isCollapsed ? shrinkRate : p5.cos(scaler[i]) * 300
    );
    scaler[i] += 0.05;
  };

  let popCirc = (theScaler, p5) => {
    theScaler = theScaler * 21;
    let scalerRounded = Math.floor(theScaler);

    if (scalerRounded % 71 === 0) {
      console.log("theScaler", scalerRounded);
      circs.pop();

      selectColor(p5)
      circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: 50,
        color: color,
        scaler: p5.random(100, 500),
      };
      console.log("circle", circle);
      circs.unshift(circle);
    }
  };

  let collapse = (p5) => {
    isCollapsed = !isCollapsed;
  };

  const killCircles = (origDiameter, p5) => {
    shrinkRate = origDiameter;
    if (shrinkRate < 0) {
      shrinkRate = shrinkRate * -1;
    }
  };

  const draw = (p5) => {
    p5.background("black");

    while (!hasRun) {
      for (let i = 0; i < circs.length; i++) {
        scaler[i] = p5.random(1, circs.length);
        hasRun = true;
      }
    }

    // Create circles with the deets from generate()
    // Created and turned loose via runCircles()
    //
    for (let i = 0; i < circs.length; i++) {
      runCircles(p5, i);
    }

    popRate += 0.05;
    popCirc(popRate, p5);

    if (isCollapsed) {
      while (!isShrinking) {
        for (let i = 0; i < circs.length; i++) {
          killCircles(p5.cos(scaler[i]) * 300, p5);
        }
        isShrinking = true;
      }
    }

    shrinkRate -= 9;
    if (shrinkRate <= 0) {
      p5.noLoop();
      window.open("/mechaneyes", "_self");
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
