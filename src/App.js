import { Routes, Route } from 'react-router-dom';
import Sidebar from './pages/sideBar';
import Rooms from './components/rooms/Rooms';
import RoomDetails from './components/rooms/RoomDetails';


const App = () => (
  <> 
     <Sidebar />
    <Routes>
      <Route path="/" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
    </Routes>
  </>
);
export default App;
