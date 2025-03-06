import React from "react";

const GoogleMap = () => {
  return (
    <div className="google-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145446.25841341032!2d51.4391951!3d25.2856329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45dad171f4a8e1%3A0xc24f74f4d8ef8e4!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sbd!4v1670395681365!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
