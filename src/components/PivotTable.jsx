import Searchbar from "./Searchbar"
import { MaincontentStyle } from "./styles/MaincontentStyle"
import "react-pivottable/pivottable.css"
import { useState } from "react"
import PivotTableUI from "react-pivottable/PivotTableUI"
import dataJSON from "../data/pivot.json"

const PivotTable = () => {
	const [data, setData] = useState(dataJSON)

	/* const getGoverment = async () => {
		const result = await fetch("http://localhost:5000/goverment/seegoverments", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			} // ,
			//body: JSON.stringify(data),
		})

		const data = await result.json()

		console.log("gov data", data)

		setData(data)
	} */

	/* useEffect(() => {
		getGoverment()
	}, []) */

	return (
		<MaincontentStyle>
			<Searchbar />
			<div>
				<div className="div-title">This is a sample of pivot tables library</div>
				{data.length > 0 ? (
					<PivotTableUI
						data={data}
						onChange={(s) => setData(s)}
						rendererName="Table Heatmap"
						agregatorName="Integer Sum"
						rows={["Province"]}
						cols={["Party"]}
						{...data}
					/>
				) : (
					"no data"
				)}
			</div>
		</MaincontentStyle>
	)
}

export default PivotTable
