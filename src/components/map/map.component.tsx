import React, {ReactElement} from 'react';
import {useStyles} from './map.style';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './map.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import FlyTo from './fly-to.component';
import {MAP_LONG_TEXT, MAP_LAT_TEXT, MAP_ZOOM_TEXT} from '../map/map.const';
import {StoreInterface} from '../../store/store.interface';
import {NavigationPathEnum} from '../../enums/navigation-path.enum';

const MapComponent = (): ReactElement => {
  const classes = useStyles();

  const offersList = useSelector(({offers}: StoreInterface) => offers.offersList);

  return (
    <div className={classes.container}>
      <MapContainer
        center={[MAP_LONG_TEXT, MAP_LAT_TEXT]}
        zoom={MAP_ZOOM_TEXT}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/lilisaleck/ckror7g104glw17modhmn4e38/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGlsaXNhbGVjayIsImEiOiJja3JvcmQyNmoxOWt5MnFudmRyNW1zZXYzIn0.NumWx7r3TL6dVWONLYmH8Q
"
        />
        {offersList?.map((offer) => {
          return (
            <Marker key={offer.id} position={[+offer.latitude, +offer.longitude]}>
              <Popup>
                <Link
                  to={{
                    pathname: `${NavigationPathEnum.SINGLE_OFFER}/${offer.title.replace(
                      /\s/g,
                      '-'
                    )}`,
                    state: offer,
                  }}
                >
                  {offer.title}
                </Link>
              </Popup>
            </Marker>
          );
        })}
        <FlyTo />
      </MapContainer>
    </div>
  );
};

export default MapComponent;