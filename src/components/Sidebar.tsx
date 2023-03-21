import { SidebarStyle } from "./styles/SidebarStyles"
import logo from "../assets/graph-icon.png"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
	return (
		<SidebarStyle>
			<div className="img-container">
				<img src={logo} alt="logo" />
			</div>
			<div className="div-options">
				<ul>
					<li>
						<NavLink to="/monster" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							Flex Monster
						</NavLink>
					</li>
					<li>
						<NavLink to="/highcharts" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							Hghcharts
						</NavLink>
					</li>
					<li>
						<NavLink to="/pivottable" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							React Pivot Table
						</NavLink>
					</li>
					<li>
						<NavLink to="/cubejs" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							Cube Dev | Tableau
						</NavLink>
					</li>
					<li>
						<NavLink to="/reactchart" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							React Chart
						</NavLink>
					</li>
					<li>
						<NavLink to="/reactvis" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							React VIS
						</NavLink>
					</li>
					<li>
						<NavLink to="/echarts" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							ECharts
						</NavLink>
					</li>
					<li>
						<NavLink to="/iframe" className={({ isActive }) => (isActive ? "selected" : undefined)}>
							IFrame
						</NavLink>
					</li>
				</ul>
			</div>
		</SidebarStyle>
	)
}

export default Sidebar
