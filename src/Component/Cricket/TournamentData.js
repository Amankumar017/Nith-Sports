import React, { useState, useEffect } from 'react';
import TournamentInfo from './TournamentInfo';
import Cricketdata from './db'; // import your database object here

// const React=require('react');
// const useState = 
// const data = await getCricketData();
const TournamentData = () => {
  const [tournamentData, setTournamentData] = useState([]);

  useEffect(() => {
    // fetch the data from the database and set it in the state
    const data = Cricketdata();
    console.log(data);
    setTournamentData(data);
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      {tournamentData.map((tournament) => (
        <TournamentInfo
          tournamentName={tournament.tournamentName}
          teamName={tournament.teamName}
          date={tournament.date}
          time={tournament.time}
          place={tournament.place}
        />
      ))}
    </div>
  );
};

export default TournamentData;
