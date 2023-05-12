import "./styles.css";

import SunburstChart from "./components/SunburstChart";
// import multisats from "./data/mulstats.json";
import test from "./data/sca.json";

export default function App() {
  return (
    <div className="App">
      <div className="chart">
        <h1>Hexaware Sunburst Chart</h1>
        <SunburstChart data={test} />
      </div>
    </div>
  );
}
