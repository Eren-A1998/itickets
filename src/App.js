import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import EventDetails from './Pages/EventDetails/EventDetails'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/eventDetails' element={<EventDetails/>}></Route>
    </Routes>
  );
}

export default App;
