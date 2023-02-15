import Navbar from "./Navbar"
import { MaincontentStyle } from "./styles/MaincontentStyle"
import * as FlexmonsterReact from 'react-flexmonster'

const MonsterGraphs = () => {
	return (
		<MaincontentStyle>
			<Navbar />
			<div>
				<div className="div-title">This is a sample of the Flexmonster Library</div>
				<FlexmonsterReact.Pivot toolbar={true} componentFolder='https://cdn.flexmonster.com/' width='100%' report='https://cdn.flexmonster.com/reports/report.json' />
			</div>
		</MaincontentStyle>
	)
}

export default MonsterGraphs
