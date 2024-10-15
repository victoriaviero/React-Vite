import React, { useState, useEffect } from "react";
import Card from './Card.jsx'

function CardContent2({ agregarAlCarrito }) {

  const API = ('https://fakestoreapi.com/products?limit=3')
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      });
  }, []);

  return (
    <>
      {data.map((product, index) => (
        <Card
          key={product.id}
          imagenLink={product.image}
          title={product.title}
          descripcion={product.description}
          precio={`$${product.price}`}
          buttonText="Agregar al carrito"
          onButtonClick={agregarAlCarrito}
        />

      ))}

    </>
  );
};

export default CardContent2