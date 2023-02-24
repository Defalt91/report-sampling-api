import Searchbar from "./Searchbar"
import { MaincontentStyle } from "./styles/MaincontentStyle"
import "react-pivottable/pivottable.css"
import { useState } from "react"
import PivotTableUI from "react-pivottable/PivotTableUI"
import dataJSON from "../data/pivot.json"

const PivotTable = () => {
	const [data, setData] = useState(dataJSON)
	return (
		<MaincontentStyle>
			<Searchbar />
			<div>
				<div className="div-title">This is a sample of pivot tables library</div>
				<PivotTableUI
					data={data}
					onChange={(s) => setData(s)}
					rendererName="Table Heatmap"
					agregatorName="Integer Sum"
					rows={["Province"]}
					cols={["Party"]}
					{...data}
				/>
			</div>
		</MaincontentStyle>
	)
}

export default PivotTable
