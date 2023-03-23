import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MonsterGraphs from "./components/MonsterGraphs"
import HighchartsGraph from "./components/HighlightGraph"
//import Sidebar from "./components/Sidebar"
import { Container } from "./components/styles/Container"
import PivotTable from "./components/PivotTable"
import ReactChart from "./components/ReactChart"
import ReactVis from "./components/ReactVis"
import Home from "./components/Home"
import Echarts from "./components/Echarts"
import Cube from "./components/Cube"
import Iframe from "./components/Iframe"

function App() {
	return (
		<Container>
			<Router>
				{/* <Sidebar /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/monster" element={<MonsterGraphs />} />
					<Route path="/highcharts" element={<HighchartsGraph />} />
					<Route path="/pivottable" element={<PivotTable />} />
					<Route path="/cubejs" element={<Cube />} />
					<Route path="/reactchart" element={<ReactChart />} />
					<Route path="/reactvis" element={<ReactVis />} />
					<Route path="/echarts" element={<Echarts />} />
					<Route path="/iframe" element={<Iframe />} />
				</Routes>
			</Router>
		</Container>
	)
}

export default App
