import "./Header.scss";
import headerimage from "../../assets/Menu.png";

function Header() {
  return (
    <section className="section">
      <div className="body-wrap">
        <div className="header">
          <img src={headerimage} />
        </div>
      </div>
    </section>
  );
}

export default Header;
