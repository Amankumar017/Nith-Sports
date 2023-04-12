import React from 'react';
import './tournamentInfo.css';

const TournamentInfo = ({ tournamentName, teamName, date, time, place }) => {
  return (
    <div className="tournament-info">
      <h2 className="tournament-name">{tournamentName}</h2>
      <h3 className="team-name">{teamName}</h3>
      <div className="datetime">
        <p className="date">{date}</p>
        <p className="time">{time}</p>
      </div>
      <p className="place">{place}</p>
    </div>
  );
};

export default TournamentInfo;
