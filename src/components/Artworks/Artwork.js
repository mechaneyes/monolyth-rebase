import ArtworkTitle from "./ArtworkTitle";
import Card from "../UI/Card";
import "./Artwork.scss";

const Artwork = (props) => {
  return (
    <Card className="artwork-item">
      <div className="artwork-item__headstone">
        <div className="artwork-item__deets">
          <h1 className="artwork-item__artist-name">{props.artist}</h1>
          <ArtworkTitle title={props.title} year={props.year} />
        </div>
        <img
          className="artwork-item__qr"
          src={`/images/${props.qr}`}
          alt="QR code to get additional info"
        />
        <button className="artwork-item__cta">info</button>
      </div>
      <img
        className="artwork-item__image"
        src={`/images/artworks/${props.image}`}
        alt={props.alt}
      />
      <div className="artwork-item__footstone">
        <p className="artwork-item__artwork-info">{props.info}</p>
      </div>
    </Card>
  );
};

export default Artwork;
