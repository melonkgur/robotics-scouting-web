import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' exact element={ <Home/> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
