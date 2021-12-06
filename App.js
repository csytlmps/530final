import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="Topic">FIND NEW MOVIES</h1>
      <p>NOW PLAYING</p>
      <img src="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F24409_320_470.jpg&w=828&q=75" alt="eternals" />
      <img src="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F30442_320_470.jpg&w=828&q=75" alt="ghostbusters" />
      <img src="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F33045_320_470.jpg&w=828&q=75" alt="encanto" />
      <p>COMING SOON</p>
      <img src="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F30954_320_470.jpg&w=828&q=75" alt="west side story" />  
      <img src="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F29920_320_470.jpg&w=828&q=75" alt="kingsman" />
       <p>Find a theater near you
        <a
          className="App-link"
          href="https://www.cineplex.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
         here
        </a>.
        </p>
      </header>
    </div>
  );
}

export default App;
