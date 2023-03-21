import { MaincontentStyle } from "./styles/MaincontentStyle"

const Iframe = () => {
	return (
		<MaincontentStyle>
			<iframe src="http://localhost:4000" title="frame-example" className="frame-style"></iframe>
		</MaincontentStyle>
	)
}

export default Iframe
