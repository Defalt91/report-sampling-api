import { MaincontentStyle } from "./styles/MaincontentStyle"
import * as FlexmonsterReact from "react-flexmonster"
import Searchbar from "./Searchbar"

const MonsterGraphs = () => {
	return (
		<MaincontentStyle>
			<Searchbar />
			<div>
				<div className="div-title">This is a sample of the Flexmonster Library</div>
				<FlexmonsterReact.Pivot
					toolbar={true}
					componentFolder="https://cdn.flexmonster.com/"
					height="840px"
					report="https://cdn.flexmonster.com/reports/report.json"
				/>
			</div>
		</MaincontentStyle>
	)
}

export default MonsterGraphs
