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
	}
	body {
		background-color: #212223;
		color: #f1f2f3;
		line-height: 1.4;
	}
`