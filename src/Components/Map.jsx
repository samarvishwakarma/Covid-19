import React from 'react'
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

const Map = (props) => {
    const position = [-50,51]

    var myIcon = icon({
        iconUrl: 'https://www.svgrepo.com/show/127575/location-sign.svg',
        iconSize: [10, 20]
    });
        
    return(
        <MapContainer center={[20,77]} zoom={3} scrollWheelZoom={true} className='w-[800px] h-[400px] m-5 z-0 max-lg:w-[200px]'>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {props.cases.length > 0 && (
                props.cases.map(cases => (
                    <Marker icon={myIcon} position={[cases.countryInfo.lat,cases.countryInfo.long]}>
                        <Popup>
                            {cases.country} <br /> 
                            Active Cases: {cases.active} <br /> 
                            Recovered Cases: {cases.recovered} <br />
                            Deaths: {cases.deaths} <br />
                        </Popup>
                    </Marker>
                ))
            )}
        </MapContainer>
    )
}

export default Map