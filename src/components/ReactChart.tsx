import { Legend, LineElement, Tooltip, ArcElement } from "chart.js"
import { BarElement, CategoryScale, Chart, RadialLinearScale, LinearScale, Title, PointElement } from "chart.js"
import { Bar, Line, Doughnut, PolarArea } from "react-chartjs-2"
import Searchbar from "./Searchbar"
import { MaincontentStyle } from "./styles/MaincontentStyle"

const ReactChart = () => {
	const randomNums = (start: number, stop: number) => {
		return Math.floor(Math.random() * (stop - start)) + start
	}
	Chart.register(ArcElement, CategoryScale, RadialLinearScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend)

	const optionsHor = {
		indexAxis: "y" as const,
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: "right" as const,
			},
			title: {
				display: true,
				text: "Chart.js Horizontal Bar Chart",
			},
		},
	}

	const optionsBar = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Chart.js Bar Chart",
			},
		},
	}

	const optionsLine = {
		responsive: true,
		interaction: {
			mode: "index" as const,
			intersect: false,
		},
		stacked: false,
		plugins: {
			title: {
				display: true,
				text: "Chart.js Line Chart - Multi Axis",
			},
		},
		scales: {
			y: {
				type: "linear" as const,
				display: true,
				position: "left" as const,
			},
			y1: {
				type: "linear" as const,
				display: true,
				position: "right" as const,
				grid: {
					drawOnChartArea: false,
				},
			},
		},
	}

	const optionsNut = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Chart.js Doughnut Chart",
			},
		},
	}

	const labels = ["January", "February", "March", "April", "May", "June", "July"]
	const labels2 = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]

	const data = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => randomNums(-1000, 1000)),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Dataset 2",
				data: labels.map(() => randomNums(-1000, 1000)),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	}

	const dataPos = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => randomNums(0, 1000)),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Dataset 2",
				data: labels.map(() => randomNums(0, 1000)),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	}

	const dataLine = {
		labels,
		datasets: [
			{
				label: "Dataset 1",
				data: labels.map(() => randomNums(-1000, 1000)),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
				yAxisID: "y",
			},
			{
				label: "Dataset 2",
				data: labels.map(() => randomNums(-1000, 1000)),
				borderColor: "rgb(53, 162, 235)",
				backgroundColor: "rgba(53, 162, 235, 0.5)",
				yAxisID: "y1",
			},
		],
	}
	const dataNut = {
		labels2,
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(255, 159, 64, 1)",
				],
				borderWidth: 1,
			},
		],
	}
	const dataPolar = {
		labels2,
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"rgba(255, 99, 132, 0.2)",
					"rgba(54, 162, 235, 0.2)",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)",
				],
				borderWidth: 1,
			},
		],
	}

	return (
		<MaincontentStyle>
			<Searchbar />
			<div>
				<div className="div-title"> react chart 2 or chart.js ??</div>
				<Bar options={optionsHor} data={data} className="chart-container" />
				<Bar options={optionsBar} data={dataPos} className="chart-container" />
				<Line options={optionsLine} data={dataLine} className="chart-container" />
				<div className="split-chart">
					<Doughnut options={optionsNut} data={dataNut} className="chart-container" />
					<PolarArea options={optionsNut} data={dataPolar} className="chart-container" />
				</div>
			</div>
		</MaincontentStyle>
	)
}

export default ReactChart
