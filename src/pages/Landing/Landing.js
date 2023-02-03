import "./Landing.scss";
import Header from "../../components/Header/Header";
import FrequentFlyerView from "../../components/FrequentFlyerView/FrequentFlyerView";
import EverydayEarnerView from "../../components/EverydayEarnerView/EverydayEarnerView";
import cart from "../../assets/HeroImage3.png";
import extensionIcon from "../../assets/ExtensionLogo.png";

function Landing() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="body-wrap">
          <div className="hero__block">
            <div>
              <img className="hero__image" src={cart} />
            </div>
            <div className="hero__textcontainer">
              <h1>We help you to earn points in any dollar you spend</h1>
              <p>
                With our browser extension, you can gain point <b>Easier</b> and
                <b> Faster</b> from thousands of our partners.
              </p>
              <button className="button button--landing">Add to Chrome</button>
            </div>
          </div>
        </div>
      </section>
      {/* conditionally render below: */}
      <FrequentFlyerView />
      <EverydayEarnerView />
      <section className="section section--how-to">
        <div className="body-wrap">
          <div className="howto">
            <div className="howto__image-container">
              <img className="howto__image" src={extensionIcon} />
            </div>
            <div className="howto__textcontainer">
              <div className="howto__text">
              <h1 className="howto__title">How do you use it:</h1>
              
              <p className="bold">Step 1:</p>
              <p className="bold bold--bottom">Install the extension to the browser</p>
              
              <p className="bold">Step 2:</p>
              <p className="bold bold--bottom">Sign in to your Aeroplan account</p>
              
              <p className="bold">Step 3:</p>
              <p className="bold bold--bottom">Track and redeem points</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="dontmiss">
          <h1 className="dontmiss__title">
            Don't miss it. 
            <br />
            Earn your points.
            <br />
            Use your points
          </h1>
          <button className="button button--landing">Add to Chrome</button>
        </div>
      </section>

      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
}

export default Landing;
