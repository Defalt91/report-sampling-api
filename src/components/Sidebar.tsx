import { Link } from "react-router-dom"
import { SidebarStyle } from "./styles/SidebarStyles"
import logo from "../assets/graph-icon.png"

const Sidebar = () => {
	return (
		<SidebarStyle>
			<div className="img-container">
				<img src={logo} alt="logo" />
			</div>
			<div className="div-options">
				<ul>
					<Link to="/monster">
						<li>Flex Monster</li>
					</Link>
					<Link to="/highcharts">
						<li>Hghcharts</li>
					</Link>
					<Link to="/pivottable">
						<li>React Pivot Table</li>
					</Link>

					<li>Cube Dev | Tableau</li>
				</ul>
			</div>
		</SidebarStyle>
	)
}

export default Sidebar
