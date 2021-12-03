import Header from "../Header/Header";
import RandomCrackly from "../RandomCrackly/RandomCrackly";
import "./Homepage.scss";

let HomepageComp = () => {
  return (
    <>
      <Header />
      <main className="homepage">
        <RandomCrackly />
        <section className="homepage__words">
          {/* https://www.goodreads.com/work/quotes/208362-2001-a-space-odyssey */}
          <h1>Superior Dwala</h1>
          <h3>
            The time is fast approaching when Earth, like all mothers, must say
            farewell to her children.
          </h3>
          <p>
            Unlike the animals, who knew only the present, Man had acquired a
            past; and he was beginning to grope toward a future. This future
            still stands as fiction.
          </p>
          <h3>The truth, as always, will be far stranger.</h3>
          <div className="homepage__links">
            <a href="https://www.instagram.com/theprintfineart/">
              <p>@theprintfineart</p>
            </a>{" "}
            <span className="homepage__spacer">|</span>
            <a href="https://www.instagram.com/mechaneyes/">
              <p>@mechaneyes</p>
            </a>
          </div>
        </section>
        <video
          className="fiorucci"
          autoPlay={true}
          loop
          muted
          muted={true}
          controls
        >
          <source
            src={`/images/Leckey-Mark_FiorucciMadeMeHardcore_1999.mp4`}
            type="video/mp4"
          />
        </video>
      </main>
    </>
  );
};

export default HomepageComp;
