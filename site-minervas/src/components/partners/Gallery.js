import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import exampleimage from "../../assets/example-image.svg"

const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <img src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="Escola SESC"/>  
    </div>,
    <div className="item" data-value="2">
        <img src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="Educa Digital"/>
    </div>,
    <div className="item" data-value="3">
        <img src={exampleimage} onDragStart={handleDragStart} role="presentation" alt="ManaMano"/>
    </div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default Carousel