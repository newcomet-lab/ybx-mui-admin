import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import LazyLoading from '@/components/LazyLoading'

const theme = createMuiTheme({
  shape: {
    borderRadius: 12
  },
  palette: {
    primary: {
      main: purple[500]
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<LazyLoading />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
