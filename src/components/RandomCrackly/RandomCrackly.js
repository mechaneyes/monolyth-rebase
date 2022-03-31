import { useState, useLayoutEffect } from "react";
import ReactGA from "react-ga";

import "./RandomCrackly.scss";

// Shuffling my array of characters from the Mark Leckey Guardian article
// https://www.theguardian.com/news/2015/mar/26/how-mark-leckey-became-the-artist-of-the-youtube-generation
//
// Spelling out the article using Crackly, designed by the wonderful Zuzana Licko. From Emigre.
// https://fonts.adobe.com/fonts/crackly
//
const RandomCrackly = () => {
  // The stack overflow answer that solved the issue
  // "The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle"
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
  //

  let leckeyArticle =
    "ThefirsttimetheNewYorkgalleristGavinBrownbundantlybearedfaintlyursineBritonawMarkLeckeyascapturedWewereintheChelseaHotelnrecalledMarkwaswearingaVneckmohairjThefirstWewereintheChelseaHotel";
  let leckeyArray = leckeyArticle.split("");
  let leckeyArrayBackup = leckeyArray;
  let leckeyArrayShuffled;

  const [swapper, handleSwapper] = useState([...leckeyArray]);

  useLayoutEffect(() => {
    ReactGA.pageview(window.location.pathname);

    const swapInterval = setInterval(() => {
      shuffleArray(leckeyArray);
      leckeyArrayShuffled = leckeyArray;
      console.log("leckeyArray leckeyArrayShuffled", leckeyArrayShuffled);

      // With the splicing solution just below I'm now able to target secific
      // characters in the array to only change the ones I choose. Rough right
      // now and only manipulating the first couple items,  but this is a
      // breakthrough. Time to commit.
      // The answer on Stack Overflow: https://stackoverflow.com/a/17511398
      //
      Array.prototype.splice.apply(
        leckeyArrayBackup,
        [0, leckeyArrayShuffled.length].concat(leckeyArrayShuffled)
      );
      // console.log("leckeyArrayBackup", leckeyArrayBackup);
      handleSwapper(leckeyArrayBackup);
    }, 200);

    return () => {
      clearInterval(swapInterval);
    };
  }, [swapper]);

  const shuffleArray = (array) => {
    for (let i = 25; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i * Math.floor(Math.random() * 10)] = array[j];
      // array[j] = temp;
    }
  };

  return (
    <>
      <h2 className="crackly-text">{swapper}</h2>
    </>
  );
};

export default RandomCrackly;
