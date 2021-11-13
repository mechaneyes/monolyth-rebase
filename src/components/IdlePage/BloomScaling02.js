import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5
// https://github.com/Gherciu/react-p5

const pacificState = (p5) => {
  const numCircs = 26;
  let circs = [];
  let circle;
  let scaler = [];
  let shrinkRate;
  let hasRun = false;
  let isShrinking = false;
  let isCollapsed = false;
  let popRate = 0;

  const bubblegum = ["#052D3E", "#4D9BA6", "#F4C127", "#D87D0F", "#A63305"];
  const LAtoSD = ["#D9525E", "#0C2E59", "#175073", "#2E8C83", "#05F2AF"];
  const harvUnicorn = ["#F22E62", "#BF2C47", "#1B80BF", "#1EA4D9", "#77BDD9"];
  const fiftyFifty = ["#AC590E", "#FF9C43", "#F98B29", "#00BBE5", "#29D3F9"];
  const shepLight = ["#FFF587", "#FF8C64", "#FF665A", "#7D6B7D", "#A3A1A8"];
  const selectedColor = LAtoSD;
  let randoColor;
  let color;

  // <!-- ————————————————————————————————————o SETUP -->
  // <!-- ————————————————————————————————————o -->
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

  // <!-- ————————————————————————————————————o Circle Generator -->
  // <!-- ————————————————————————————————————o -->
  let generate = (p5) => {
    for (let i = 0; i < numCircs; i++) {
      selectColor(p5);

      circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: p5.random(50, 100),
        color: color,
      };
      circs.push(circle);
    }
  };

  // <!-- ————————————————————————————————————o Color Picker -->
  // <!-- ————————————————————————————————————o -->
  let selectColor = (p5) => {
    randoColor =
      selectedColor[Math.floor(Math.random() * selectedColor.length)];
    color = p5.color(randoColor);
    color.setAlpha(p5.random(175, 255));
    p5.fill(color);
  };

  // <!-- ————————————————————————————————————o Run Circles Run -->
  // <!-- ————————————————————————————————————o -->
  let runCircles = (p5, i) => {
    p5.fill(circs[i].color);
    p5.circle(
      circs[i].x,
      circs[i].y,
      isCollapsed ? shrinkRate : p5.cos(circs[i].r) * 300
    );
    circs[i].r += 0.05;
    console.log("sizes", i, circs[i].r);
  };

  // <!-- ————————————————————————————————————o pop() unshift() circles -->
  // <!-- ————————————————————————————————————o -->
  let popCirc = (theScaler, p5) => {
    theScaler = theScaler * 14;
    let scalerRounded = Math.floor(theScaler);

    if (scalerRounded % 71 === 0) {
      console.log("theScaler", scalerRounded);

      selectColor(p5);
      circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: p5.random(50, 100),
        color: color,
      };
      circs.unshift(circle);
      circs.pop();
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

  // <!-- ————————————————————————————————————o DRAW -->
  // <!-- ————————————————————————————————————o -->
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
