const artworks = [
  {
    id: "a0",
    artist: "Ashley Regan",
    vid: false,
    img: "AshleyRegan-Tranquility.jpg",
    alt: "Ashley Regan, Tranquility",
    title: "Tranquility",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a1",
    artist: "Brandon Alexander",
    vid: false,
    img: "BrandonAlexander-Computerlove.jpg",
    thumb: "rww-machine-hallucination--thumb.jpg",
    alt: "Brandon Alexander, Computer love",
    title: "Computer love",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a2",
    artist: "Brandon Gastinell",
    vid: false,
    img: "BrandonGastinell-DOOM.jpg",
    thumb: "BrandonGastinell-DOOM.jpg",
    alt: "Brandon Gastinell, DOOM",
    title: "DOOM",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a3",
    artist: "Camille Martin",
    vid: false,
    img: "CamilleMartin-Fish.jpg",
    alt: "Camille Martin, Fish",
    title: "Fish",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a4",
    artist: "Camille Martin",
    vid: false,
    img: "CamilleMartin-Peacock.jpg",
    alt: "Camille Martin, Peacock",
    title: "Peacock",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a5",
    artist: "Dan Ligaya",
    vid: false,
    img: "DanLigaya-Kobe.jpg",
    alt: "Dan Ligaya, Kobe",
    title: "Kobe",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a6",
    artist: "Emoni",
    vid: false,
    img: "Emoni_A_00009_5mp.jpg",
    alt: "Lorem",
    title: "Lorem",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a7",
    artist: "Jamie Worrall",
    vid: false,
    img: "JamieWorrall-AtElderway.jpg",
    alt: "Jamie Worrall, At Elderway",
    title: "At Elderway",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a8",
    artist: "Lily Mott",
    vid: false,
    img: "LilyMott-4.jpg",
    alt: "Lorem",
    title: "Lorem",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a9",
    artist: "Lily Mott",
    vid: false,
    img: "LilyMott.jpg",
    alt: "Lorem",
    title: "Lorem",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a10",
    artist: "Molly Devlin",
    vid: false,
    img: "MollyDevlin-TheFrutingBody.jpg",
    alt: "Molly Devlin - The Fruting Body",
    title: "The Fruting Body",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a11",
    artist: "Molly Devlin",
    vid: false,
    img: "MollyDevlin-fountainhead.jpg",
    alt: "Molly Devlin, fountainhead",
    title: "fountainhead",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a12",
    artist: "Nate",
    vid: false,
    img: "Nate-LAdy.jpg",
    alt: "Nate - LAdy",
    title: "LAdy",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a13",
    artist: "Ray Weitzenberg",
    vid: false,
    img: "RayWeitzenberg-33ThomasStreetMayAppear.jpg",
    alt: "Ray Weitzenberg - 33 Thomas Street May Appear",
    title: "33 Thomas Street May Appear",
    year: 1999,
    info: "Ray Weitzenberg is a visual artist and technologist living and working in Brooklyn. In 1994, via the mechanism of photography, he discovered a profound appreciation for light. 33 Thomas Street is part of the years spanning Objects May Appear collection.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a14",
    artist: "Ray Weitzenberg",
    vid: true,
    img: "RayWeitzenberg-Halalrunner.mov",
    alt: "Ray Weitzenberg - Halalrunner",
    title: "Halalrunner",
    year: 1999,
    info: "Ray Weitzenberg <h2>this</h2> is a visual artist and technologist living and working in Brooklyn. In 1994, via the mechanism of photography, he discovered a profound appreciation for light. Most recently, Ray has been creating imagery programmatically. This focus often integrates components operating outside his control, in a black box system. Such a system takes input — which can come from any one or more sources — then processes it via loosely coupled constraints, resulting in imagery composed somewhat randomly, bordering on autonomy.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a15",
    artist: "Ray Weitzenberg",
    vid: false,
    img: "RayWeitzenberg-HarveysUnicorn.png",
    alt: "Ray Weitzenberg - Harvey's Unicorn",
    title: "Harvey's Unicorn",
    year: 2021,
    info: "Harvey's Unicorn is inspired by one of DJ Harvey's Angels at the open air party he played in Los Angeles in the summer of 2021. The image is generated by a custom built Processing app, and utilizes Zuzana Licko's Whirligig font family.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a16",
    artist: "SV Wiliums",
    vid: false,
    img: "SVwiliums-frogbergcanvas.jpg",
    alt: "SV Wiliums, Frogberg",
    title: "Frogberg",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a17",
    artist: "Shaun Burner",
    vid: false,
    img: "ShaunBurner-FigureMan.jpg",
    alt: "Shaun Burner, Figure Man",
    title: "Figure Man",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a18",
    artist: "Shaun Burner",
    vid: false,
    img: "ShaunBurner-Phoenix.jpg",
    alt: "Shaun Burner, Phoenix",
    title: "Phoenix",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
];
// export default artworks;

const hypnos = [
  {
    id: "a0",
    class: "",
    artist: "Ray Weitzenberg",
    vid: true,
    img: "discoBlink.mp4",
    alt: "Ray Weitzenberg - Hypnodelic",
    title: "Hypnodelic",
    year: 2016,
    info: "Ray Weitzenberg <h2>this</h2> is a visual artist and technologist living and working in Brooklyn. In 1994, via the mechanism of photography, he discovered a profound appreciation for light. Most recently, Ray has been creating imagery programmatically. This focus often integrates components operating outside his control, in a black box system. Such a system takes input — which can come from any one or more sources — then processes it via loosely coupled constraints, resulting in imagery composed somewhat randomly, bordering on autonomy.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
  {
    id: "a1",
    class: "yoal",
    artist: "Yoal",
    vid: false,
    img: "yoal-0.1.0.jpg",
    alt: "Yoal",
    title: "Yoal",
    year: 1999,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod ultrices placerat. Maecenas bibendum molestie dui, pretium rutrum libero aliquet sit amet. Morbi sit amet pharetra libero, vel luctus ligula.",
    qr: "/qr-codes/qr-theprint.com.png",
  },
];
export {artworks, hypnos};