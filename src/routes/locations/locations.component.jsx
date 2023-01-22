import "./locations.styles.scss";

const Locations = () => {
  return (
    <div className="outer-locations">
      <img
        className="locations-img-main"
        src="https://media.discordapp.net/attachments/1065884142417498145/1066733103403511918/Rectangle_11.png"
      />
      <div className="locations-left">
        <div className="come-visit">Come Visit Us!</div>
        <div className="located">
          We're located in a lovely neighborhood, in the Blloku District
        </div>
        <button className="locations-main-btn">Locations</button>
      </div>
    </div>
  );
};

export default Locations;
