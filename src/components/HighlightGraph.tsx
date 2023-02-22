import { useRef, useState } from "react"
import ChartContainer from "./ChartContainer"
import Searchbar from "./Searchbar"
import { MaincontentStyle } from "./styles/MaincontentStyle"

const HighchartsGraph = () => {
	const [charInfo, setChartInfo] = useState(null)
	/* const [input, setInput] = useState("")

	const handleCHange = (event: any) => {
		setInput(event.target.value)
	} */

	console.log(charInfo)

	const chartRef = useRef(null)
	/* const updateChart = () => {
		if (chartRef.current) {
			chartRef.current.chart.series[1].update({
				name: input,
			})
		}
	} */

	return (
		<MaincontentStyle>
			<Searchbar />
			<div>
				<div className="div-title">This are some of the highcharts graphs!</div>
				<ChartContainer chartRef={chartRef} setChartInfo={setChartInfo} />
			</div>
		</MaincontentStyle>
	)
}

export default HighchartsGraph
