import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <h1>LiveKit Demo</h1>
      <div>
        <Link to='rooms/room1'>Enter Room</Link>
      </div>
      <div>
        <Link to='test-page'>Test Page</Link>
      </div>
    </>
  );
};

export default MainPage;
