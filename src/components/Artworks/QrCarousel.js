import "./QrCarousel.scss";

const QrCarousel = (props) => {
  return (
    <div className="qr-carousel">
      <img
        className="artwork-item__qr"
        src={`/images/qr-codes/qr-monolyth.global.png`}
        alt="QR code to get additional info"
      />
      <h2>Find out more about Monolyth</h2>
    </div>
  );
};

export default QrCarousel;
