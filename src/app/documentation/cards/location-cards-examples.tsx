import React, { ReactElement } from "react";
import LocationMapCard, { LocationMapCardBody, LocationMapCardHeader, LocationMapCardMap, LocationMapCardTop } from "stepone-ui/locationMapCard";

const data_mock: any = {
  imgSrc: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/05/543113-asi-funciona-google-maps-conexion-internet.jpg",
  statusTag: "semantic",
  title: "Location, location city",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptate!",
};

// LOLATION MAP CARD EXAMPLE
export const LocationMapCards: React.FC<any> = (): ReactElement => {
  return (
    <LocationMapCard>
      <LocationMapCardMap
        hoverButton={
          <button>
            <span className="material-icons">search</span>View more
          </button>
        }
      >
        <img src={data_mock.imgSrc} alt="img-top" />
      </LocationMapCardMap>
      <LocationMapCardTop>
        <div className="status-tag_success">{data_mock.statusTag}</div>
      </LocationMapCardTop>
      <LocationMapCardHeader>
        <h4>{data_mock.title}</h4>
        <button className="button-card-icon">
          <span className="material-icons">edit</span>
        </button>
      </LocationMapCardHeader>
      <LocationMapCardBody>{data_mock.description}</LocationMapCardBody>
    </LocationMapCard>
  );
};

export const location_map_card = `
import React, { ReactElement } from "react";
import LocationMapCard, { LocationMapCardBody, LocationMapCardHeader, LocationMapCardMap, LocationMapCardTop } from "stepone-ui/locationMapCard";
import { data_mock } from "./data-mock-file"

const LocationMapCards: React.FC<any> = (): ReactElement => {
  return (
    <LocationMapCard>
    <LocationMapCardMap
      hoverButton={
        <button>
          <span className="material-icons">search</span>View more
        </button>
      }
    >
      <img src={data_mock.imgSrc} alt="img-top" />
    </LocationMapCardMap>
    <LocationMapCardTop>
      <div className="status-tag_success">{data_mock.statusTag}</div>
    </LocationMapCardTop>
    <LocationMapCardHeader>
      <h4>{data_mock.title}</h4>
      <button className="button-card-icon">
        <span className="material-icons">edit</span>
      </button>
    </LocationMapCardHeader>
    <LocationMapCardBody>{data_mock.description}</LocationMapCardBody>
  </LocationMapCard>
  );
};

export default LocationMapCards
`;

export const location_data_mock_file = `
export const data_mock: any = {
  imgSrc: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/05/543113-asi-funciona-google-maps-conexion-internet.jpg",
  statusTag: "semantic",
  title: "Location, location city",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptate!",
};
`;
