import React from 'react';
//import ReactDOM from 'react-dom';
import App from '../src/App.jsx';
import ReactDOM from 'react-dom/client';

/*ReactDOM.render(
    <App />,
    document.getElementById('root')
)*/

// container??
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
