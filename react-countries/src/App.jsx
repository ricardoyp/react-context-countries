import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Countries } from './pages/Countries';
import { Country } from './pages/Country';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
      </Route>
    </Routes>
  );
}

export default App;
