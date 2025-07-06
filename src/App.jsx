import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationHeader from './reusables/NavigationHeader';
import Home from './pages/Home';
import './index.css'


function App() {
  return (
    <Router>
      <NavigationHeader />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
