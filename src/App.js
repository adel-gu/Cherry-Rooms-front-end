import { Routes, Route } from 'react-router-dom';
import Rooms from './components/rooms/Rooms';
import RoomDetails from './components/rooms/RoomDetails';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
    </Routes>
  </>
);
export default App;
