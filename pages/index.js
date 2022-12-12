import { useRef, useState } from "react";

import CardItem from "../components/CardItem/CardItem";

const API_KEY = "qG2FI6bKR6WkLTFD1jifLwxmZxMvIZnA";

const HomePage = ({}) => {
  const [ipDataInfo, setIpDataInfo] = useState([{ id: "", timezones: "" }]);

  const inputRef = useRef();

  const getIpHandler = async (event) => {
    event.preventDefault();

    const inputRefVal = inputRef.current.value;
    const response = await fetch(
      `https://api.apilayer.com/ip_to_location/${inputRefVal}
`,
      {
        method: "GET",
        headers: {
          apikey: API_KEY,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    const ipData = [
      {
        id: data.ip,
        ip: data.ip,
        location: data.region_name,
        timezones: data.timezones,
        isp: data.connection.isp,
        longitude: data.longitude,
        latitude: data.latitude,
      },
    ];

    return setIpDataInfo(ipData);
  };

  return (
    <div>
      <h1 className="bg-red-500 text-3xl">Ip Tracker</h1>

      <form onSubmit={getIpHandler}>
        <input type="text" ref={inputRef} />
        <button type="submit">Get Data</button>
      </form>

      {ipDataInfo.map((item) => {
        return (
          <CardItem
            key={item.id}
            isp={item.isp}
            location={item.location}
            ip={item.ip}
            longitude={item.longitude}
            latitude={item.latitude}
            timezone={item.timezones[7]}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
