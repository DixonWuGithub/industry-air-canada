import "./Landing.scss";
import Header from "../../components/Header/Header";
import FrequentFlyerView from "../../components/FrequentFlyerView/FrequentFlyerView";
import EverydayEarnerView from "../../components/EverydayEarnerView/EverydayEarnerView";
import cart from "../../assets/HeroImage2.png";
import extensionIcon from "../../assets/ExtensionLogo.png";

function Landing() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="body-wrap">
          <div className="landing">This is the Landing Page</div>

          <div className="hero__block">
            <img src={cart} />
            <div className="hero__textcontainer">
              <h1>We help you to earn points in any dollar you spend</h1>
              <p>
                With our browser extension, you can gain point <b>Easier</b> and
                <b> Faster</b> from thousands of our partners.
              </p>
              <button className="button">Add to Chrome</button>
            </div>
          </div>
        </div>
      </section>
      {/* conditionally render below: */}
      <FrequentFlyerView />
      <EverydayEarnerView />
      <section>
        <div className="howto">
          <div className="howto__image">
            <img src={extensionIcon} />
          </div>
          <div className="howto__textcontainer">
            <h1>How do you use it:</h1>
            <br />
            <p className="bold">Step 1:</p>
            <p>Install the extension to the browser</p>
            <br />
            <p className="bold">Step 2:</p>
            <p>Sign in to your Aeroplan account</p>
            <br />
            <p className="bold">Step 3:</p>
            <p>Track and redeem points</p>
          </div>
        </div>
      </section>
      <section>
        <div className="dontmiss">
          <h1>
            Don't miss it. Earn your points.
            <br />
            Use your points
          </h1>
          <button className="button">Add to Chrome</button>
        </div>
      </section>

      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
}

export default Landing;
