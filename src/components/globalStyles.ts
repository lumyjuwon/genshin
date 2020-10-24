import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
	${reset};
	a {
		text-decoration: none;
		color: inherit;
	}
	* {
		box-sizing: border-box;
		user-select: "none";
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	body {
		background-color: #212223;
		color: #f1f2f3;
		line-height: 1.4;
		font-family: 'Nanum Gothic', sans-serif
	}
`