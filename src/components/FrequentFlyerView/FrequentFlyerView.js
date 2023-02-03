import "./FrequentFlyerView.scss";
import pointsbar from "../../assets/Pointsbar.png";
import card from "../../assets/AeroplanEliteCard.png";

function FrequentFlyerView() {
  return (
    <>
      <section className="section">
        <div className="body-wrap">
          <div className="frequent-flyer">
            <div className="frequent-flyer__text">
              <h2>Hey Michael</h2>
              <p>
                You are <span className="redtext">20000</span> points away from
                even more exclusive travel perks.
              </p>
              <h2>80,000</h2>
              <p>/100,000 EDQ</p>
              <img src={pointsbar} alt="progress bar" />
            </div>
            <div className="frequent-flyer__card">
              <img className="image" src={card} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FrequentFlyerView;
