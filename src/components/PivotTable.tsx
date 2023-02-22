import Searchbar from "./Searchbar"
import { MaincontentStyle } from "./styles/MaincontentStyle"
import "react-pivottable/pivottable.css"
import { useState } from "react"

const PivotTable = () => {
	const [data, setData] = useState([
		["attribute1", "atribute2"],
		["value1", "value2"],
	])
	return (
		<MaincontentStyle>
			<Searchbar />
			<div>
				<div className="div-title">This is a sample of pivot tables library</div>
				{/* <PivotTable data={data} /> */}
			</div>
		</MaincontentStyle>
	)
}

export default PivotTable
