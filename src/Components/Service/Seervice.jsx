import React from "react";
import { Link } from "react-router-dom";
import './Seervice.css'

const Seervice = (props) => {
  const { name, picture, description } = props.service;
  return (
      <div>
          <img className="service-img mx-auto mb-8 mt-6" src={picture} alt="" />
        <h2 className="text-5xl font-bold text-white mb-3">{name}</h2>
        <p>{description}</p>
        <Link to="/services" className="bg-white seervice-btn text-black mt-4 px-20 py-3 mt-3 rounded-xl">More detail</Link>
      </div>
  );
};

export default Seervice;
