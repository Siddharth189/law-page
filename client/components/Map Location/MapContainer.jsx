import "./map.css";

const MapContainer = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1004894587486!2d77.48273209999999!3d28.506624199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefc3053805e1%3A0xa5c04a54165728bd!2sADHIVAKTA%20LAW%20CAFE!5e0!3m2!1sen!2sin!4v1708253267796!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      >
        
      </iframe>
    </div>
  );
};

export default MapContainer;
