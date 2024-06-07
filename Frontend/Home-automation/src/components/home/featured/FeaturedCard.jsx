import React from "react";

const featured = [
  {
    cover: '../../../../images/hero/h1.png',
    name: "Surveillance",
  },
  {
    cover: '../../../../images/hero/h2.png',
    name: "Home devices",
  },
  {
    cover: '../../../../images/hero/h3.png',
    name: "Security",
  },
  {
    cover: '../../../../images/hero/h4.png',
    name: "Thermostat",
  },
  {
    cover: '../../../../images/hero/h6.png', // Ensure this path is correct or import it similarly
    name: "Appliances",
  },
];

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            <img src={items.cover} alt={items.name} />
            <h4>{items.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
