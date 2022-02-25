import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { ThemeProvider } from '@material-ui/core';
import theme from './helpers/theme';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Routes>
              <Route path='/' exact element={ <Home/> } />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
