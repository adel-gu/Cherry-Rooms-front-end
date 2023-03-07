import { Link } from 'react-router-dom';
import roomVideo from '../assets/rooms.mp4';

const Splash = () => (
  <div className="relative w-screen h-screen">
    <video
      src={roomVideo}
      type="video/mp4"
      loop
      controls={false}
      muted
      autoPlay
      className="w-full h-full object-cover"
    />
    <div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center text-white bg-gradient-to-r from-black to-transparent">
      <div className="px-3 text-center">
        <h1 className="text-5xl font-bold text-lime-300">CHERRY ROOMS</h1>
        <p>Welcome to cherry rooms, find places all over the wolrd</p>
      </div>
      <div className="mt-10 flex justify-between">
        <Link to="/signup" className="border border-lime-500 py-3 px-7 mr-3">
          Sign Up
        </Link>
        <Link to="/login" className="bg-lime-500 py-3 px-7 mr-5">
          Sign In
        </Link>
      </div>
    </div>
  </div>
);

export default Splash;
