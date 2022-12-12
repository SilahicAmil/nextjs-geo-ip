import Card from "../Card/Card";

const CardItem = ({ ip, location, timezone, isp, latitude, longitude }) => {
  return (
    <Card>
      <div>
        <h1>IP: {ip}</h1>
      </div>
      <div>
        <h1>Location: {location}</h1>
      </div>
      <div>
        <h1>TimeZone: {timezone}</h1>
      </div>
      <div>
        <h1>ISP: {isp}</h1>
      </div>
      <div>
        <h1>Long: {longitude}</h1>
        <h1>Lat: {latitude}</h1>
      </div>
    </Card>
  );
};

export default CardItem;
