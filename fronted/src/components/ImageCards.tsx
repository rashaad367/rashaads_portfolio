import React, { useState } from "react";
import style from "./ImageCards.module.css";

type CardProps = {
  imageUrl: string;
  description: string;
};

const ImageCards: React.FC<CardProps> = ({ imageUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={style.imageCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="Image" />
      {isHovered && (
        <div className={style.descriptionBubble}>{description}</div>
      )}
    </div>
  );
};

export default ImageCards;
