import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Chamonix" />
        <footer>
          This project was coded by Eva Weymuller and is open source code on{" "}
          <a
            href="https://github.com/eweymuller/react-weather-applicaiton"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
