import React from "react";
import Card from './Card.jsx'
function CardContent (){
    const handleClickButton = () => {
        alert("proximamente voy al carrito :D")
    };
    return (
        <>
        <Card
          imagenLink={"https://www.xtremepc.com.mx/cdn/shop/files/51136ca4-14b8-4252-9fee-91a606bdaf65_800x.png?v=1725914138"}
          title="Card 1"
          descripcion="producto petacular"
          precio="$550000"
          buttonText="Agregar al carrito"
          onButtonClick={handleClickButton}
        />
        <Card
          imagenLink={"https://img.freepik.com/fotos-premium/disenador-mouse-juegos-rgb-sobre-fondo-negro-ia-generativa_849906-5402.jpg"}
          title="Card 2"
          descripcion="producto petacular"
          precio="$110000"
          buttonText="Agregar al carrito"
          onButtonClick={handleClickButton}
        />
        <Card
          imagenLink={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlaxcu9knHTUxNO192FYR1LvvsxaExgof61Q&s"}
          title="Card 3"
          descripcion="producto petacular"
          precio="$125000"
          buttonText="Agregar al carrito"
          onButtonClick={handleClickButton}
        />
        </>
    )
}

export default CardContent