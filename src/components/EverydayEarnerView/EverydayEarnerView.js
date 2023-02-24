import "./EverydayEarnerView.scss";
import pointsbar from "../../assets/Pointsbar.png";
import card from "../../assets/AeroplanCard.png";

function EverydayEarnerView() {
  return (
    <>
      <section className="section section--profile">
        <div className="body-wrap">
          <div className="everdayearner">
            <div className="everdayearner__text">
              <h2>Hey Rachel</h2>
              <p>
                You are <span className="redtext">20000</span> points away from
                even more exclusive travel perks.
              </p>
              <h2>80,000</h2>
              <p>/100,000 EDQ</p>
              <img src={pointsbar} alt="progress bar" />
            </div>
            <div className="everdayearner__card">
              <img className="image" src={card} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EverydayEarnerView;
