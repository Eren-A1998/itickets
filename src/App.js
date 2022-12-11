import './App.css';
import { Route, Routes ,useLocation} from 'react-router-dom';
import Home from './Pages/Home/Home';
import EventDetails from './Pages/EventDetails/EventDetails'
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[pathname])

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/eventDetails' element={<EventDetails/>}></Route>
    </Routes>
  );
}

export default App;
