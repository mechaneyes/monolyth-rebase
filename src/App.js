import React from "react";

import Artworks from "./components/Artworks/Artworks";

const App = () => {
  const artworks = [
    {
      id: "a1",
      artist: 'Ray Weitzenberg',
      img: "rww-bill-kilgore-4k.gif",
      title: "Harvey's Angels",
      year: 2021,
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula. Ut consectetur sit amet tortor et ultrices. Sed a finibus metus. Etiam vitae turpis ex. Duis tristique tristique urna et finibus. Ut non volutpat lorem.',
      qr: "/qr-codes/qr-mechaneyes.com.png",
    },
    {
      id: "a2",
      title: "Harvey's Angels",
      img: "rww-bill-kilgore-4k.gif",
      amount: 799.49,
    },
    {
      id: "a3",
      title: 'Harvey\'s Angels',
      img: 'rww-bill-kilgore-4k.gif',
      amount: 294.67,
    },
    {
      id: "a4",
      title: "Harvey's Angels",
      img: "rww-bill-kilgore-4k.gif",
      amount: 450,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Artworks items={artworks} />
    </div>
  );
};

export default App;
