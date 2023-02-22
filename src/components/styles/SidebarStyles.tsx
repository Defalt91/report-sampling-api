import styled from "styled-components"
import { colors } from "../../styles/globalStyle"

export const SidebarStyle = styled.section`
	display: flex;
	flex-direction: column;
	background-color: ${colors.primary};
	color: ${colors.white};
	/* width: 15vw; */
	flex: 1 1 15%;
	text-align: center;

	.img-container {
		padding: 2rem 0;
	}
	img {
		width: 80%;
		height: 62px;
	}
	.invert {
		filter: invert(100%);
	}

	ul {
		list-style: none;
	}
	li {
		padding: 22px 0;
		font-size: 18px;
		font-weight: 500;
		cursor: pointer;
		//flex-direction: column;
		//flex: 1;
	}
	li:hover {
		background-color: ${colors.primaryDark};
	}
	a {
		text-decoration: none;
		color: ${colors.white};
	}
`
