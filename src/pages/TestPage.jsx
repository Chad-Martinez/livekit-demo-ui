import { Link } from 'react-router-dom';

const TestPage = () => {
  return (
    <>
      <h1>Test Page</h1>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/rooms/room1'>Room 1</Link>
      </div>
    </>
  );
};

export default TestPage;
