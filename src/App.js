import { Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
// import Rooms from './components/rooms/Rooms';
import RoomDetails from './components/rooms/RoomDetails';
import ReservationCard from './components/reservations/ReservationCard';
import MyReservation from './components/reservations/MyReservation';

const App = () => (
  <>
    <Sidebar />
    <Routes>
      <Route path="/" element={<MyReservation />} />
      <Route path="/reservations/:id" element={<ReservationCard />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
    </Routes>
  </>
);
export default App;
