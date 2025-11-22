import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; // استبدل BrowserRouter بـ HashRouter
import App from './App';
import { AuthProvider } from './contexts/AuthContext';
import { FavoritesProvider } from './contexts/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
