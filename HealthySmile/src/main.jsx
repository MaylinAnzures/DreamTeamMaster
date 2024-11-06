import { createRoot } from 'react-dom/client';
import { UserProvider } from './componentes/UserContext.jsx';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <Router>
      <UserProvider>
      <App />
    </UserProvider>
    </Router>
);
