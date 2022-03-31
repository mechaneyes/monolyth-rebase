import Artworks from "../components/Artworks/Artworks";
import Header from "../components/Header/Header";
import { artworks } from "../data/collection-data";

const Mechaneyes = () => {
  return (
    <>
      <Header />
      <Artworks items={artworks} />
    </>
  );
};
export default Mechaneyes;
