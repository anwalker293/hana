import "./home.styles.scss";
import Locations from "../locations/locations.component.jsx";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  return (
    <div>
      <div className="outer-container">
        <img
          className="background-img"
          src="https://cdn.discordapp.com/attachments/1065884142417498145/1066675467492532264/hana-bg-final.png"
        />

        <button className="top-menu btn">Menu</button>
        <button className="top-order-now btn">Order Now</button>

        <button className="menu btn">menu</button>
        <img
          className="menu-img img-icon"
          src="https://cdn.discordapp.com/attachments/1065884142417498145/1066675856350654475/hana-png-1.png"
        />

        <button className="locations btn">locations</button>
        <img
          className="locations-img img-icon"
          src="https://cdn.discordapp.com/attachments/1065884142417498145/1066675856933662740/hana-png-4.png"
        />
        <button className="order btn">place order</button>
        <img
          className="order-img img-icon"
          src="https://cdn.discordapp.com/attachments/1065884142417498145/1066675856535199784/hana-png-2.png"
        />

        <button className="contact btn">contact</button>
        <img
          className="contact-img img-icon"
          src="https://cdn.discordapp.com/attachments/1065884142417498145/1066675856732323840/hana-png-3.png"
        />
      </div>
    </div>
  );
};

export default Home;
