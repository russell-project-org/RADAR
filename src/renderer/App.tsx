import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/order
import { CssBaseline } from '@mui/material';
import { NavBarElectron } from './components/NavBar';
import { DashBoard } from './pages/DashBoardHome';
import ToDoList from './pages/ToDoList';

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBarElectron />
      <div>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/todo" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}
