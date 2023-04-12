import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home';
import RoomPage from './pages/Room';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/room/:roomID' element={<RoomPage />}/>
    </Routes>
  );
}

export default App;
