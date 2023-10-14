import 'modern-normalize/modern-normalize.css';
import './styles/fonts.css';
import './styles/vars.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyles } from 'styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
