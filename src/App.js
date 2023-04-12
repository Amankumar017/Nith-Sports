import './App.css';
import Top from './Component/Top';
import Navigation from './Component/Navigation';
import TournamentInfo from './Component/Cricket/TournamentInfo';
import TournamentData from './Component/Cricket/TournamentData';

function App() {
  return (
    <div className="App">
        <Top/>
        <Navigation/>
        <TournamentInfo/>
        <TournamentData/>
    </div>
  );
}

export default App;
