import React from 'react';
import './contacts.css';
import { Container } from 'react-bootstrap';
import arrow from './../images/arrow-contact.svg';
import Footer from '../components/footer/Footer';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const Contacts = () => {
    const position =[53.51557, 30.22622];
    const MapIcon = new Icon({iconSize:[32,38], iconUrl:"https://cdn.icon-icons.com/icons2/1808/PNG/512/map-pin_115251.png"});
    return ( 
        <>
            <Container className='contacts-container'>
                <div className="contacts-textbox">
                    <div className="contacts_textbox-container">
                        <h1>Мы находимся:</h1>
                        <div className="contacts_textbox place">
                            <img src={arrow} alt="arrow" />
                            <p>Могилевская обл., г.Быхов, ул.Щорса,46 (р-н ж/д вокзала, частный сектор).</p>
                        </div>
                    </div>
                    <div className="contacts_textbox-container">
                        <h1>Звонить:</h1>
                        <div className="contacts_textbox phone">
                            <img src={arrow} alt="arrow" />
                            <p>+375 22 317-01-13  <br />
                                +375 22 317-10-03 <br />
                                +375 44 778-80-50</p>
                        </div>
                    </div>
                </div>
                {/* className='contacts-map-container' */}
                <div className="contacts-map">
                <MapContainer center={position} zoom={17} style={{ height: '400px' }} dragging={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={MapIcon}>
                        <Popup>
                            ДОСААФ г.Быхов.
                        </Popup>
                    </Marker>
                    </MapContainer>
                </div>
            </Container>
            <Footer/>
        </>
     );
}
 
export default Contacts;