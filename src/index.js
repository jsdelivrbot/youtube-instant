import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCIiTP0uOVE0EBCTbzB_sB0GvuD2lIH4AQ';

// create a new component. this should produce HTML
const App = () => {
	return <div>Hi!</div>;
}

// take this component's generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));