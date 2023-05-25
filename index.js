import React from 'react';
import './index.css';
import './globals.css';
import './styleguide.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("app"));
