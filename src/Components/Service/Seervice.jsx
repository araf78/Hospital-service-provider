import React from "react";
import './Seervice.css'

const Seervice = (props) => {
  const { name, picture, description } = props.service;
  console.log(props.service);
  return (
      <div>
          <img className="service-img mx-auto mb-8 mt-6" src={picture} alt="" />
        <h2>name {name}</h2>
        <p>{description}</p>
        <button
          className="bg-white bottom-0 text-black px-20 py-3 mt-3 rounded-xl"
          type="submit"
        >
          More detail
        </button>
      </div>
  );
};

export default Seervice;
