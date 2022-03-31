import Sketch from "react-p5";

// https://github.com/Gherciu/react-p5

const pacificState = (props, p5) => {
  let numCircs = 24;
  let circs = [];
  let circle;
  let circleMax;
  let circleMin;
  let scaler = [];
  let strobeRate;
  let shrinkRate;
  let isShrinking = false;
  let isCollapsed = false;
  let popRate = 0;

  // const bubblegum = ["#052D3E", "#4D9BA6", "#F4C127", "#D87D0F", "#A63305"];
  // const LAtoSD = ["#D9525E", "#0C2E59", "#175073", "#2E8C83", "#05F2AF"];
  // const harvUnicorn = ["#F22E62", "#BF2C47", "#1B80BF", "#1EA4D9", "#77BDD9"];
  // const fiftyFifty = ["#AC590E", "#FF9C43", "#F98B29", "#00BBE5", "#29D3F9"];
  // const shepLight = ["#FFF587", "#FF8C64", "#FF665A", "#7D6B7D", "#A3A1A8"];
  // const selectedColor = circColors.bubblegum;

  const circColors = {
    bubblegum: ["#052D3E", "#4D9BA6", "#F4C127", "#D87D0F", "#A63305"],
    LAtoSD: ["#D9525E", "#0C2E59", "#175073", "#2E8C83", "#05F2AF"],
    harvUnicorn: ["#F22E62", "#BF2C47", "#1B80BF", "#1EA4D9", "#77BDD9"],
    fiftyFifty: ["#AC590E", "#FF9C43", "#F98B29", "#00BBE5", "#29D3F9"],
    shepLight: ["#FFF587", "#FF8C64", "#FF665A", "#7D6B7D", "#A3A1A8"],
  };
  let randoArray;
  let randoColor;

  const randomColorArray = (obj) => {
    let keys = Object.keys(obj);
    randoArray = obj[keys[(keys.length * Math.random()) << 0]];
  };
  randomColorArray(circColors);
  let color;

  // console.log('progressCount', props.progressCount)

  // <!-- ————————————————————————————————————o SETUP -->
  // <!-- ————————————————————————————————————o -->
  const setup = (p5, canvasParentRef) => {
    p5.frameRate(60);
    // eslint-disable-next-line
    const can = p5
      .createCanvas(p5.windowWidth, p5.windowHeight + 80)
      .parent(canvasParentRef);
    p5.noStroke();
    p5.background("black");

    // button = p5.createImg("../../images/hand-enter.png");
    // button.addClass("enter");
    // button.mousePressed(collapse);

    // Number and sizes of circles for various screen sizes
    //
    numCircs = 24;
    circleMax = p5.width / 1.3;
    circleMin = p5.width / 4.7;
    strobeRate = 0.02;

    if (p5.width > 1000) {
      numCircs = 35;
      circleMax = p5.width / 2;
      circleMin = p5.width / 15;
    }

    if (p5.width > 2000) {
      numCircs = 35;
      circleMax = p5.width / 1.5;
      circleMin = p5.width / 10;
      strobeRate = 0.02;
    }

    for (let i = 0; i < circs.length; i++) {
      scaler[i] = p5.random(1, circs.length);
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
    randoColor = randoArray[Math.floor(Math.random() * randoArray.length)];
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
        circs[i].grow = false;
        circs[i].r -= strobeRate;
      } else if (!circs[i].grow && circs[i].r <= circleMin) {
        circs[i].grow = true;
        circs[i].r += strobeRate;
      } else {
        circs[i].r += strobeRate;
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
  // let collapse = () => {
  //   isCollapsed = !isCollapsed;
  // };

  const killCircles = (origDiameter) => {
    shrinkRate = origDiameter;
    if (shrinkRate < 0) {
      shrinkRate = shrinkRate * -4;
    }
  };

  // <!-- ————————————————————————————————————o DRAW -->
  // <!-- ————————————————————————————————————o -->
  const draw = (p5) => {
    p5.background("black");

    runCircles(p5);
    popRate += 0.08;
    popCirc(popRate, p5);

    if (isCollapsed) {
      while (!isShrinking) {
        for (let i = 0; i < circs.length; i++) {
          killCircles(p5.width / 2);
        }
        isShrinking = true;
      }
    }

    if (p5.width > 2000) {
      shrinkRate -= 25;
    } else {
      shrinkRate -= 5;
    }
    if (shrinkRate <= -5) {
      p5.noLoop();
      p5.background("black");
      window.open("/welcome", "_self");
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
