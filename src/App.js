import { useState } from "react";
import "./App.scss";
import Table from "./components/Table";
import Statistics from "./components/Statistics";

const page3 = "Page2";
const statistics = "statistics";
const table = "table";

function App() {
  const [currentPage, setcurrentPage] = useState("table");
  const [statisticsData, setStatisticsData] = useState(null);
  return (
    <div className="App">
      <button onClick={() => setcurrentPage(table)}>{table}</button>
      <button onClick={() => setcurrentPage(statistics)}>{statistics}</button>
      <button onClick={() => setcurrentPage(page3)}>{page3}</button>
      {currentPage === table && (
        <Table onConfirm={(data) => setStatisticsData(data)} />
      )}
      {currentPage === statistics && <Statistics data={statisticsData} />}
      {currentPage === page3 && <div>Страница3</div>}
    </div>
  );
}

export default App;
