import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5

const pacificState = (p5) => {
  const numColumns = 450;
  let yOffset = -70;
  yOffset = 0;

  let circs = [];

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


  const setup = (p5, canvasParentRef) => {
    p5.frameRate(20);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noStroke();
    backgroundColor = p5.color(
      p5.random(120),
      p5.random(160),
      p5.random(200, 245)
    );
  };

  const draw = (p5) => {
    p5.background("black");
    p5.fill("#F4C127");
    
    for (let i = 0; i < 20; i++) {
      randoColor = fillColor[Math.floor(Math.random() * fillColor.length)];
      c = p5.color(randoColor)
      p5.fill(c);
      let r = p5.map(p5.sin(angle), -1, 1, 20, 200);
      p5.circle(p5.random(p5.windowWidth), p5.random(p5.windowHeight), r * 1.1);
    }
    angle += 0.03
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
