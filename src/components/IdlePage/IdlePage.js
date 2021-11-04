import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5

const pacificState = (p5) => {
  const numColumns = 50;
  let yOffset = -70;
  yOffset = 0;
  let backgroundColor;
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

  let angle = 0;
  let angleV = 0;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(15);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noStroke();
    backgroundColor = p5.color(
      p5.random(120),
      p5.random(160),
      p5.random(200, 245)
    );
  };

  const draw = (p5) => {
    backgroundColor = p5.color(
      p5.random(100),
      p5.random(100),
      p5.random(200, 255)
    );
    // p5.background(backgroundColor); #4D9BA6
    p5.background("black");

    p5.fill("#F4C127");
    for (let i = 0; i < numColumns; i++) {
      randoColor = fillColor[Math.floor(Math.random() * fillColor.length)];
      c = p5.color(randoColor);
      p5.fill(c);

      p5.rect(
        (p5.windowWidth / numColumns) * i,
        p5.random(yOffset, 500),
        p5.windowWidth / numColumns,
        p5.random(100, p5.windowHeight / 2)
      );
    }
    let r = p5.map(p5.sin(angle), -1, 1, 0, 200);
    p5.circle(0, 0, r * 2);
    // let increment = TWO_PI / 60;
    angle += angleV;
    angleV = 0.3;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
