import Header from '../Header/Header'
import "./WelcomePage.scss";

const WelcomePage = () => {
  return (
    <>
      <Header />
      <main className="welcome-page">
        <div className="welcome-page__content">
          <h3>👋</h3>
          <h1>Welcome to The Monolith</h1>
          <h2>We turn apes into humans.</h2>
          <p>
            Interact with these images by waving your hand over the sensor
            in front of you.
          </p>
          <p>
            Wave horizontally left to right or right to left.
          </p>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
