import Header from '../Header/Header'
import "./WelcomePage.scss";

const WelcomePage = () => {
  return (
    <>
      <Header />
      <main className="welcome-page">
        <div className="welcome-page__content">
          <h2>👋</h2>
          <h1>Welcome to The Monolith</h1>
          <h3>We turn apes into humans.</h3>
          <h3>
            Interact with these images by waving your hand over the sensor
            below.
          </h3>
          <h3>
            Wave horizontally left to right or right to left.
          </h3>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
