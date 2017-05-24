import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
	//create react element
	//element tag, attribute, children
	React.createElement('h2', null, "Hello React!"),
	//where to render the element
	document.getElementById('main')
);
