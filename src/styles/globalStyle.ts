import { createGlobalStyle } from "styled-components"

/* interface IColors {
	primary: string
	primaryDark: string
	secondary: string
} */

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`

export const colors = {
	primary: "#44318d",
	primaryDark: "#2a1b3a",
	secondary: "",
	secondaryDark: "",
	black: "#333333",
	white: "#ebebeb",
}
export default GlobalStyle
