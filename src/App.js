import './App.scss';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import MockDash from './pages/MockDash/MockDash';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MockDash />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
