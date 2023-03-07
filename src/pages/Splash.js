import { Link } from 'react-router-dom';

const Splash = () => (
  <>
    <h1>Splash Screen</h1>
    ;
    <div>
      <Link to="/login">Sign In</Link>
      ;
      <Link to="/signup">Sign Up</Link>
      ;
    </div>
  </>
);

export default Splash;
