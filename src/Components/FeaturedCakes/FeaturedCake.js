import React from 'react';
import CakeCard from '../CakeCard/CakeCard';
import './FeaturedCake.css'

function FeaturedCakes() {
  
  const cakes = [
    { id: 1, name: "Chocolate Truffle", image: "/images/Chocolate.png" },
    { id: 2, name: "Red Velvet", image: "/images/red velvet.png" },
    { id: 3, name: "Lemon Cake", image: "/images/Lemon.png" },
    { id: 4, name: "Tiramasu Cake", image: "/images/tiramasu.png" },
    { id: 5, name: "Fruit Cake", image: "/images/Fruit.png" },
  ];

  return (
    <section className="featured-cakes" >
      <h2>Featured Cakes</h2>
      <p><b><center>Featured because they’re too good to be hidden!</center></b></p>
      <div className="cake-list">
        {cakes.map(cake => <CakeCard key={cake.id} cake={cake} />)}
      </div>
    </section>
  );
}

export default FeaturedCakes;
