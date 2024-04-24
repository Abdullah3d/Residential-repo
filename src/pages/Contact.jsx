import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'animate.css';

const Contact = () => {
    const position = [51.505, -0.09]; // Set the initial position

    return (
        <div>
            <div className="text-center text-4xl py-40 font-bold">
                <Helmet>
                    <title>Residential | contact</title>
                </Helmet>
                <h2 className="animate__animated animate__bounce">Contact with us</h2>
                <h3 className="animate__animated animate__bounce">We are one call away from you</h3>
                <h2 className="text-blue-300 mt-5 shadow-sm animate__animated animate__bounce">Your Hotline : +974 66 55 777</h2>
                <div className="map">
                    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
