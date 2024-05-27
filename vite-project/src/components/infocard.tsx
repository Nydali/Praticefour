import React from 'react';
import './InfoCard.css'; // Import CSS file for styling

interface InfoCardProps {
  name: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ name }) => {
  return (
    <div className="info-card">
      <p className="name">{name}</p>
    </div>
  );
};

export default InfoCard;
