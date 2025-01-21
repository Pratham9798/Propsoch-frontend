import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useParams } from "react-router-dom"; 

const ProductDetail = () => {
  const { id } = useParams(); 
  const product = { name: "Sample Product", latitude: 51.505, longitude: -0.09 }; 

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <MapContainer center={[product.latitude, product.longitude]} zoom={13} style={{ width: "100%", height: "400px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[product.latitude, product.longitude]}>
          <Popup>{product.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ProductDetail;


