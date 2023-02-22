import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MonsterGraphs from "./components/MonsterGraphs"
import HighchartsGraph from "./components/HighlightGraph"
import Sidebar from "./components/Sidebar"
import { Container } from "./components/styles/Container"
import PivotTable from "./components/PivotTable"

function App() {
	return (
		<Container>
			<Router>
				<Sidebar />
				<Routes>
					<Route path="monster" element={<MonsterGraphs />} />
					<Route path="highcharts" element={<HighchartsGraph />} />
					<Route path="pivottable" element={<PivotTable />} />
				</Routes>
			</Router>
		</Container>
	)
}

export default App
