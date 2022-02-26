import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CentralComputer from './pages/centralcomputer';
import Scout from './pages/scout';
import { ThemeProvider } from '@material-ui/core';
import theme from './helpers/theme';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Routes>
              <Route path='/' element={ <Home/> } exact />
              <Route path='/central-computer' element={ <CentralComputer /> } exact />
              <Route path='/scout' element={ <Scout /> } exact />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
