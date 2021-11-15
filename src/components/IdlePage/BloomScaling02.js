import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5
// https://github.com/Gherciu/react-p5

// import hand from '../../hand.png'

const pacificState = (p5) => {
  const numCircs = 24;
  let circs = [];
  let circle;
  let circsSize = [];
  let circleMax
  let circleMin
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
  const selectedColor = shepLight;
  let randoColor;
  let color;

  let button;

  let imgHand
  const preload = (p5) => {
    imgHand = p5.loadImage('../../images/hand.png')
  }

  // <!-- ————————————————————————————————————o SETUP -->
  // <!-- ————————————————————————————————————o -->
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(60);
    const can = p5
      .createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef);
    p5.noStroke();
    p5.background("black");
    circleMax = p5.width / 1.3
    circleMin = p5.width / 4.7
    can.mousePressed(collapse);    

    p5.imageMode('CENTER');

    button = p5.createButton("enter");
    button.addClass("step-inside");
    if (p5.width > 2000) {
      button.position(p5.width / 2.4, p5.height / 2.2);
    } else {
      button.position(p5.width / 3.15, p5.height / 2.18);
    }
    
    button.mousePressed(collapse);

    for (let i = 0; i < circs.length; i++) {
      scaler[i] = p5.random(1, circs.length);
      hasRun = true;
    }

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
        r: p5.random(circleMin, circleMax),
        color: color,
        grow: true,
      };
      circs.push(circle);

      // circsSize.push(circle.r)
      // console.log('circsSize', circle.r)
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
  let runCircles = (p5) => {
    for (let i = 0; i < circs.length; i++) {
      p5.fill(circs[i].color);
      p5.circle(
        circs[i].x,
        circs[i].y,
        isCollapsed ? shrinkRate : p5.cos(circs[i].r) * circs[i].r
      );

      if (circs[i].grow && circs[i].r >= circleMax) {
        circs[i].grow = false
        circs[i].r -= 0.02;
      } else if (!circs[i].grow && circs[i].r <= circleMin) {
        circs[i].grow = true
        circs[i].r += 0.02;
      } else {
        circs[i].r += 0.02;
      }
      // console.log("sizes", i, circs[1].r);
    }
  };

  // <!-- ————————————————————————————————————o pop() unshift() circles -->
  // <!-- ————————————————————————————————————o -->
  let popCirc = (theScaler, p5) => {
    theScaler = theScaler * 14;
    let scalerRounded = Math.floor(theScaler);

    if (scalerRounded % 250 === 0) {
      // console.log("theScaler", scalerRounded);

      selectColor(p5);
      circle = {
        x: p5.random(p5.windowWidth),
        y: p5.random(p5.windowHeight),
        r: p5.random(circleMin, circleMax),
        color: color,
        grow: true,
      };
      circs.unshift(circle);
      circs.pop();
    }
  };

  // <!-- ————————————————————————————————————o End the Experience -->
  // <!-- ————————————————————————————————————o -->
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

    runCircles(p5);
    popRate += 0.05;
    popCirc(popRate, p5);

    if (isCollapsed) {
      while (!isShrinking) {
        for (let i = 0; i < circs.length; i++) {
          killCircles(p5.width, p5);
        }
        isShrinking = true;
      }
    }

    shrinkRate -= 15;
    if (shrinkRate <= -5) {
      p5.noLoop();
      p5.background("black");
      window.open("/mechaneyes", "_self");
    }

    if (p5.width > 2000) {
      p5.image(imgHand, p5.width / 2.6, p5.height / 3.5, p5.width / 4, p5.width / 2.3);
    } else {
      p5.image(imgHand, p5.width / 2.68, p5.height / 3.2, p5.width / 4, p5.width / 2.5);
    }
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default pacificState;
