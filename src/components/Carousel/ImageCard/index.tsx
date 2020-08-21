import React from "react";

import { ImageCardContainer } from "./styles";

interface ImageCardProps {
  imageId: number,
  imageUrl: string
}

const ImageCard: React.FC<ImageCardProps> = ({ imageId, imageUrl }) => {
  return (
      <ImageCardContainer url={imageUrl} to={`/event/${imageId}`} />
  );
};

export default ImageCard;
