import Sketch from "react-p5";
// https://www.npmjs.com/package/react-p5

const pacificState = (p5) => {
  let backgroundColor;
  const numColumns = 65;
  const yOffset = 0;

  const setup = (p5, canvasParentRef) => {
    p5.frameRate(15);
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.noStroke()
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
    p5.background(backgroundColor);

    for (let i = 0; i < numColumns; i++) {
      p5.rect(
        (p5.windowWidth / numColumns) * i,
        p5.random(yOffset, 500),
        p5.windowWidth / numColumns,
        p5.random(p5.windowHeight / 3)
      );
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default pacificState;
