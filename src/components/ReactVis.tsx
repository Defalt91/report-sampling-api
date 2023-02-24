import Searchbar from "./Searchbar"
import { MaincontentStyle } from "./styles/MaincontentStyle"
import {
	XYPlot,
	LineSeries,
	VerticalGridLines,
	HorizontalGridLines,
	MarkSeries,
	XAxis,
	YAxis,
	LabelSeries,
	GradientDefs,
	AreaSeries,
	Borders,
} from "react-vis"
import "../../node_modules/react-vis/dist/style.css"

const ReactChart = () => {
	function generateData() {
		return [
			{
				x: Math.random() * 3,
				y: Math.random() * 20,
				label: "Wigglytuff",
				size: 30,
				style: { fontSize: 20 },
			},
			{ x: Math.random() * 3, y: Math.random() * 20, label: "Psyduck", size: 10 },
			{ x: Math.random() * 3, y: Math.random() * 20, label: "Geodude", size: 1 },
			{
				x: Math.random() * 3,
				y: Math.random() * 20,
				label: "red",
				size: 12,
				rotation: 45,
			},
			{ x: Math.random() * 3, y: Math.random() * 20, label: "blue", size: 4 },
		]
	}

	const data = [
		{ x: 0, y: 8 },
		{ x: 1, y: 5 },
		{ x: 2, y: 4 },
		{ x: 3, y: 9 },
		{ x: 4, y: 1 },
		{ x: 5, y: 7 },
		{ x: 6, y: 6 },
		{ x: 7, y: 3 },
		{ x: 8, y: 2 },
		{ x: 9, y: 0 },
	]

	const data2 = generateData()

	return (
		<MaincontentStyle>
			<Searchbar />
			<div>
				<div className="div-title">This is a simple list of react VIS</div>
				<div className="chart-container split-chart-2">
					<XYPlot height={500} width={500}>
						<LineSeries data={data} />
						<VerticalGridLines />
						<HorizontalGridLines />
						<XAxis />
						<YAxis />
					</XYPlot>
					<XYPlot yDomain={[-1, 22]} xDomain={[-1, 5]} height={500} width={500}>
						<XAxis />
						<YAxis />
						<MarkSeries data={data2} strokeWidth={2} sizeRange={[5, 15]} />
						<LabelSeries animation allowOffsetToBeReversed data={data2} />
					</XYPlot>
				</div>
				<div className="center-chart">
					<XYPlot xDomain={[1.2, 3]} yDomain={[11, 26]} width={500} height={500}>
						<GradientDefs>
							<linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
								<stop offset="0%" stopColor="red" stopOpacity={0.4} />
								<stop offset="100%" stopColor="blue" stopOpacity={0.3} />
							</linearGradient>
						</GradientDefs>
						<VerticalGridLines />
						<HorizontalGridLines />

						<AreaSeries
							color={"url(#CoolGradient)"}
							data={[
								{ x: 1, y: 10, y0: 1 },
								{ x: 2, y: 25, y0: 5 },
								{ x: 3, y: 15, y0: 3 },
							]}
						/>
						<Borders
							style={{
								bottom: { fill: "#fff" },
								left: { fill: "url(#CoolGradient)", opacity: 0.3 },
								right: { fill: "#fff" },
								top: { fill: "#fff" },
							}}
						/>
						<XAxis />
						<YAxis />
						<AreaSeries
							data={[
								{ x: 1, y: 5, y0: 6 },
								{ x: 2, y: 20, y0: 11 },
								{ x: 3, y: 10, y0: 9 },
							]}
						/>
					</XYPlot>
				</div>
			</div>
		</MaincontentStyle>
	)
}

export default ReactChart
