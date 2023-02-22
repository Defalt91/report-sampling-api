import styled from "styled-components"
import { colors } from "../../styles/globalStyle"

export const SearchbarStyle = styled.div`
	display: flex;
	justify-content: center;
	padding: 2rem 0;

	input {
		//flex: 0.5;
		width: 100%;
		border: 2px solid ${colors.primary};
		padding: 16px 15px;
		border-radius: 4px;
	}
`
