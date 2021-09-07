import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { theme } from 'styles/theme';
import Router from './router/Router';
import GlobalStyles from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
