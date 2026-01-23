import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './src/pages/Home';
import DesignPage from './src/pages/DesignPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<DesignPage />} />
      </Routes>
    </Router>
  );
}