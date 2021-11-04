import Header from '../Header/Header'
import "./WelcomePage.scss";

const WelcomePage = () => {
  return (
    <>
      <Header />
      <main className="welcome-page">
        <div className="welcome-page__content">
          <h2>👋</h2>
          <h1>Welcome to NFT Kiosk</h1>
          <h3>
            Interact with these images by waving your hand over the sensor
            below.
          </h3>
          <h3>
            Currently you can scroll through the images. Soon you’ll be able to
            save them to your NFT wallet seamlessly through this interface.
          </h3>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
