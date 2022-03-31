import { useState, useLayoutEffect } from "react";
import ReactGA from "react-ga";

import "./RandomCrackly.scss";

// Shuffling my array of characters from the Mark Leckey Guardian article
// https://www.theguardian.com/news/2015/mar/26/how-mark-leckey-became-the-artist-of-the-youtube-generation
//
// Spelling out the article using Crackly, designed by the wonderful Zuzana Licko. From Emigre.
// https://fonts.adobe.com/fonts/crackly
//

let createRandString = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

let randoString = createRandString(1000);

const RandomCrackly = () => {
  // The stack overflow answer that solved the issue
  // "The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle"
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976
  //

  let leckeyArticle =
    "ThatdeepseatedsenseofaloofnessperhapswaspartofthereasonhegravitatedtowardsMcGeownashisfriendmentorandgalleristratherthanendingupwithalargermoreinternationalandgogettinggallerysuchasWhiteCubeorGagosianMcGeowndescribedCabinetalmostasifitwasasalondesrefusés“IdidntrelatetothematallMcGeownsaidoftheYBAs“IwantedtodosomethingdifferentIthoughttheworkwasreallyprovincialAsfarastheartmarketgoesGavinBrownlaughedwhenIaskedhimabouthowwellLeckeysold“Iamamercantilecreaturehesaid“IoftentrytotempthimthatwaybutitneverworksWhenthemarketandMarkcoincideitisahappythingbutitdoesnthappenthatoftenTheartmarketfavoursworkthatisstronglybrandeditprefersforexampleaworkbyJakeandDinosChapmantoresembleaworkbyJakeandDinosChapmanjustastheluxurygoodsmarketlikesLouisVuittontolooklikeLouisVuitton“MarkkeepsmovingbutthemarketlikesrepetitionasCatherineWoodputitAccordingtoStaple“IfyourideaoffreeagencyasanartistandahumanmeansyouaregoingtoeludedefinitionthentheminuteyourartbecomescommodifiedyouchangetherulesMarkchangesthefrequencyHedoesntcometorestHisrelativelackoffameoutsidetheartworldhadagreatdealtodowithmediaexpectationsandjournalistictemplatessheargued“ThelonggameisnotreveredItsnotaninterestingstory–artistslowlysuccessfullybuildscareeraskingquestionsoftheirworkandtheworldHes50hesrespectedHesgotbigshowscomingupHeshadmarkerpointssuchastheTurnerprizeThatsagoodcareerWoodtoldmeastorythatLeckeyhadmentionedtometoobackinhis20sbeforehehadmovedtotheUSwhathadmadehimgobustonhisclothingstallonPortobellomarketwashisconvictionthathecouldbringplasticjellyshoesbackintofashion–thekindofsandalsoneworeonthebeachinthe1970stoprotectyoungfeetfromsharpsandHeacquiredajoblotanddisplayedthembeautifullywitholdRicardashtraysNooneboughtasingleone";
  let leckeyArray = randoString.split("");
  let leckeyArrayBackup = leckeyArray;

  const [swapper, handleSwapper] = useState([...leckeyArray]);

  useLayoutEffect(() => {
    ReactGA.pageview(window.location.pathname);

    const swapInterval = setInterval(() => {
      shuffleArray(leckeyArray);
      // console.log("leckeyArray leckeyArrayShuffled", leckeyArrayShuffled);

      // With the splicing solution just below I'm now able to target secific
      // characters in the array to only change the ones I choose.
      // The answer on Stack Overflow: https://stackoverflow.com/a/17511398
      //
      Array.prototype.splice.apply(
        leckeyArrayBackup,
        [0, leckeyArray.length].concat(leckeyArray)
      );

      handleSwapper(leckeyArray);
    }, 100);

    return () => {
      clearInterval(swapInterval);
    };
  }, [swapper]);

  const shuffleArray = (array) => {
    for (let i = 50; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      array[i * Math.floor(Math.random() * 50)] = array[j];
    }
  };

  return (
    <>
      <h2 className="crackly-text">{swapper}</h2>
    </>
  );
};

export default RandomCrackly;
