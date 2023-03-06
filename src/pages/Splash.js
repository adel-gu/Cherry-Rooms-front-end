import { Link } from 'react-router-dom';

const Splash = () => (
  <div className="main-container">
    <h1>Splash Screen</h1>
    <div>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  </div>
);

export default Splash;
