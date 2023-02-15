import { Link } from "react-router-dom";
import { SidebarStyle } from "./styles/SidebarStyles"

const Sidebar = () => {
	return <SidebarStyle>
		<h3>Selection Menu</h3>
		<div className="div-options">
			<ul>
				<Link to='/monster'>
					<li>
						Flex Monster
					</li>
				</Link>
				<Link to='/highcharts'>
					<li>
						Hghcharts

					</li>
				</Link>
				<li>React Pivot Table</li>
			</ul>
		</div>
	</SidebarStyle>
}

export default Sidebar
